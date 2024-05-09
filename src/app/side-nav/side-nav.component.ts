import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';
import { INavbarData, fadeInOut } from './helper';
import {navbarData} from './side-nav_data';
import { BlockLike } from 'typescript';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  collapsed:boolean=false;
  navData= navbarData;
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  screenWidth = 0;
  multiple: boolean = false;

  IsApplication:boolean=true;
  IsProperties:boolean= false;
  IsEmployer:boolean=false;
  IsAgent:boolean=false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  constructor(public router: Router) {}

  ngOnInit(): void {
      this.screenWidth = window.innerWidth;
  }

 toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

 closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  handleClick(item: INavbarData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded
  }
  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  shrinkItems(item: INavbarData): void {
    if (!this.multiple) {
      for(let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }
  RenderApplication(){
    this.router.navigate(['/']);
    this.IsProperties=false;
    this.IsApplication=true;
    this.IsEmployer=false;
    this.IsAgent=false;
  }
  RenderProperties(){
    this.router.navigate(['properties-details']);
    this.IsProperties=true;
    this.IsApplication=false;
    this.IsEmployer=false;
    this.IsAgent=false;
  
  }
  RenderEmployer(){
    this.router.navigate(['employer-details']);
    this.IsProperties=false;
    this.IsApplication=false;
    this.IsEmployer=true;
    this.IsAgent=false;
  }
  RenderAgent(){
    this.router.navigate(['agent-details']);
    this.IsProperties=false;
    this.IsApplication=false;
    this.IsEmployer=false;
    this.IsAgent=true;
  }
  
}
