import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Welcome to learn binding';

  IcecreamAvailabilityStatus = "Not available"
  serverName ='test';
  cssStringVar: string= " ";

  constructor() { }
  
  onClickEventStatus()
  {
    this.IcecreamAvailabilityStatus='Ice cream is available';
  }

  onUpdateServerName(event: Event) 
  {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }
  fruits = ['Mango', 'Orange', 'Apple'];



  addFruit(item: string) {
    this.fruits.push(item);
  }  


}
