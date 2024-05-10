import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { State, toDataSourceRequestString } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { DataService } from './data.service';

@Injectable({ providedIn: 'root' })
export class GridDataService extends BehaviorSubject<any[]> {
  public state: State = {
    skip: 0,
    take: 5,
  };

  constructor(private dataService: DataService) {
    super([]);
  }

  public read(
    action: string = '',
    searchtext: string = '',
    endpoint: string = '',
    outerSearch: any = null
  ) {
    this.fetch(action, searchtext, endpoint, outerSearch)
      .pipe(tap((data) => {}))
      .subscribe((data) => {
        super.next(data);
      });
  }

  public fetch(
    action: string = '',
    searchtext: string = '',
    endpoint: string = '',
    outerSearch: any = null
  ): Observable<any> {
    switch (action) {
      case 'search': {
        let queryStr = `${toDataSourceRequestString(this.state)}`;
        const params = queryStr.split('&');
        const objSearch = Object.assign({});
        if (queryStr.indexOf('sort') > -1) {
          objSearch.pageIndex = +params[0].split('=')[1] - 1;
          objSearch.sortCol = params[1].split('=')[1].split('-')[0];
          objSearch.sortOrder = params[1].split('=')[1].split('-')[1];
          objSearch.pageSize = params[2].split('=')[1];
        } else {
          objSearch.pageIndex = +params[0].split('=')[1] - 1;
          objSearch.pageSize = params[1].split('=')[1];
          objSearch.searchText = searchtext;
        }

        return this.dataService.post(`${endpoint}`, objSearch).pipe(
          // Process the response.
          map((data: any): any => {
            return {
              data: data.items,
              total: data.totalCount,
            };
          })
        );
      }
      // case 'sort': {
      //   let queryStr = `${toDataSourceRequestString(this.state)}`;
      //   const params = queryStr.split('&');
      //   const objSearch = Object.assign({});
      //   objSearch.pageIndex = +params[0].split('=')[1] - 1;
      //   objSearch.sortCol = params[1].split('=')[1].split('-')[0];
      //   objSearch.sortOrder = params[1].split('=')[1].split('-')[1];
      //   objSearch.pageSize = params[2].split('=')[1];
      //   objSearch.searchText = searchtext;

      //   return this.dataService.post(`${endpoint}`, objSearch).pipe(
      //     // Process the response.
      //     map((data: any): any => {
      //       return {
      //         data: data.items,
      //         total: data.totalCount,
      //       };
      //     })
      //   );
      // }
      // case 'outerSearch': {
      //   let queryStr = `${toDataSourceRequestString(this.state)}`;
      //   const params = queryStr.split('&');
      //   const objSearch = Object.assign({});
      //   if (queryStr.indexOf('sort') > -1) {
      //     objSearch.pageIndex = +params[0].split('=')[1] - 1;
      //     objSearch.sortCol = params[1].split('=')[1].split('-')[0];
      //     objSearch.sortOrder = params[1].split('=')[1].split('-')[1];
      //     objSearch.pageSize = params[2].split('=')[1];
      //   } else {
      //     objSearch.pageIndex = +params[0].split('=')[1] - 1;
      //     objSearch.pageSize = params[1].split('=')[1];
      //     objSearch.searchText = searchtext;
      //   }

        

      //   return this.dataService.post(`${endpoint}`, objSearch).pipe(
      //     // Process the response.
      //     map((data: any): any => {
      //       return {
      //         data: data.items,
      //         total: data.totalCount,
      //       };
      //     })
      //   );
      // }
      case '': {
        let queryStr = `${toDataSourceRequestString(this.state)}`;
        const params = queryStr.split('&');
        const objSearch = Object.assign({});
        if (queryStr.indexOf('sort') > -1) {
          objSearch.pageIndex = +params[0].split('=')[1] - 1;
          objSearch.sortCol = params[1].split('=')[1].split('-')[0];
          objSearch.sortOrder = params[1].split('=')[1].split('-')[1];
          objSearch.pageSize = params[2].split('=')[1];
        } else {
          objSearch.pageIndex = +params[0].split('=')[1] - 1;
          objSearch.pageSize = params[1].split('=')[1];
        }
        queryStr =
          queryStr + '&skip=' + this.state.skip + '&take=' + this.state.take;

        // queryStr =
        //   queryStr + "&skip=" + this.state.skip + "&take=" + this.state.take;
        return this.dataService.post(`${endpoint}`, objSearch).pipe(
          // Process the response.
          map((data: any): any => {
            return {
              data: data.items,
              total: data.totalCount,
            };
          })
        );
      }
    }
    return of([])
  }

  queryAll(
    action: string = '',
    searchtext: string = '',
    endpoint: string = '',
    outerSearch: any = null
  ): Observable<GridDataResult[]> {
    this.state.skip = 0;
    this.state.take = 99999;
    return this.fetch(action, searchtext, endpoint, outerSearch);
  }
}
