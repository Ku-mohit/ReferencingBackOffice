import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body-app',
  templateUrl: './body-app.component.html',
  styleUrl: './body-app.component.css'
})
export class BodyAppComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0

  
  getBodyClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'body-md-screen'
    }
      return styleClass;
  }
}
