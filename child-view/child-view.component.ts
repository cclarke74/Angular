import { Component } from '@angular/core';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.css']
})
export class ChildViewComponent {

  message: string = "Nothing Yet";
  count: number = 0;

  increaseByOne(){
    //this.count = this.count + 1;
    //this.count+= 1;
    this.count++;
    this.message = "Counter: " + this.count;
  }

  decreaseByOne(){
    //this.count = this.count - 1;
    //this.count-= 1;
    this.count--;
    this.message = "Counter: " + this.count;
  }
}
