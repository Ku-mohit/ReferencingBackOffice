import { Injectable } from '@angular/core';

import { environment } from '../../../../../src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, id?: number, header?: HttpHeaders): Observable<T> {
    if (header && header.keys.length > 0) {
      return this.http.get<T>(this.getUrl(url, id), { headers: header });
    } else {
      return this.http.get<T>(this.getUrl(url, id));
    }
  }

  getWithBlob(url: string): Observable<any> {
    return this.http.get(this.getUrl(url, null), { responseType: 'blob' });
  }

   

  getAddress<T>(
    url: string,
    text?: string,
    header?: HttpHeaders
  ): Observable<T> {
    if (header && header.keys.length > 0) {
      return this.http.get<T>(url, { headers: header, params: { Text: text } });
    } else {
      return this.http.get<T>(url, { params: { Text: text } });
    }
  }

  post<T>(url: string, data: any, header?: HttpHeaders): Observable<T> {
    if (header && header.keys.length > 0) {
      return this.http.post<T>(this.getUrl(url), data, { headers: header });
    } else {
      return this.http.post<T>(this.getUrl(url), data);
    }
  }
  
  postBlob(url: string, data: any, header?: HttpHeaders): Observable<any> {
    if (header && header.keys.length > 0) {
      return this.http.post(this.getUrl(url), data, { responseType: 'blob'});
    } else {
      return this.http.post(this.getUrl(url), data,{ responseType: 'blob'});
    }
  }
  postText(url: string, data: any, header?: HttpHeaders): Observable<any> {
    if (header && header.keys.length > 0) {
      return this.http.post(this.getUrl(url), data, { responseType: 'text'});
    } else {
      return this.http.post(this.getUrl(url), data,{ responseType: 'text'});
    }
  }
  put<T>(url: string, data: any, header?: HttpHeaders): Observable<T> {
    if (header && header.keys.length > 0) {
      return this.http.put<T>(this.getUrl(url), data, { headers: header });
    } else {
      return this.http.put<T>(this.getUrl(url), data);
    }
  }

  delete<T>(url: string, header?: HttpHeaders): Observable<T> {
    if (header && header.keys.length > 0) {
      return this.http.delete<T>(this.getUrl(url), { headers: header });
    } else {
      return this.http.delete<T>(this.getUrl(url));
    }
  }

  private extractData(res: Response) {
    return res.json();
  }

  private getUrl(url: string, id?: number): string {
    let finalurl = environment.baseUrl + url;
    if (id != null) {
      finalurl = finalurl + '/' + id;
    }
    return finalurl;
  }
}
