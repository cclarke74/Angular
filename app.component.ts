import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './product.model';
import { User} from './user.model';
import { ChildViewComponent } from './child-view/child-view.component';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Controller
export class AppComponent implements OnInit {

observable = new Observable((observer) => {
    console.log("Observable starts")
    observer.next("5")
    observer.next("4")
    observer.next("3")
    observer.next("2")
    observer.next("1")
})



//Reference to the ChildViewComponent
@ViewChild(ChildViewComponent)
childComponent = {} as ChildViewComponent;

    
//Model
  title: string = "Data Binding Examples";
  firstName: string = "Jack";
	lastName: string = "Martin";

    isDisabled: boolean = true;

    savedMessage: string = "";

    message: string = "";

    toggle: boolean= false;
    show: string= "";

   product: Product = {} as Product;

   products: Product[];
   users: User[] = [];

   array: number[];
   length: number;

   temp: string[];

   messageParent: string;
   messageChild: string;
  Observable: any;

   constructor(){
      this.product = new Product("hand wash",200,new Date('2022-03-25'));
      //this.product = new Product("hand wash",200,new Date('2022-03-25'));
      this.products = [ new Product('Soap', 100, new Date('2022-03-21')),
                        new Product('Toothpaste', 200, new Date('2022-05-09')),
                        new Product('Shampoo', 150, new Date('2022-10-21'))];
      this.array = [];
      this.length = 0;

      this.temp = [];
      this.users = [
        { name: 'John', userId: 12, m1:55, m2:79, m3:85 },
        new User ('John', 12, 55, 79, 85),
        { name: 'Peter', userId: 25, m1:35, m2:50, m3:65 },
        { name: 'Brij', userId: 27, m1:85, m2:90, m3:92 },
         ];

      this.messageParent = "";
      this.messageChild = "";

      setTimeout(()=>{
        this.isDisabled = false;
      },2000);
    }

   ngOnInit() {
      this.observable = this.Observable.subscribe(
        (         value: string) => {console.log("Hello:" + value) }, //next callback
         () => { console.log("error") }, //error callback
         ()=> { console.log("completed") } //complete callback
      )
    }

    getName(): string{
      return this.firstName + ' ' + this.lastName;
    }

    getIsDisabled(): boolean {
      return this.isDisabled;
    }

    onSave(): void{
      this.savedMessage = `Message Saved ${ this.firstName }`;
    }

    onToggle(): void{
      this.toggle = !this.toggle;
    }



    onShow(): void{
      if (this.show == ""){
        this.show = "something";
      }
      else {
        this.show="";
      }
    }

    getLength(): number{
      this.length = this.array.length;
      return this.array.length;
    }
    onAddElement(): void{
      this.array.push(1);
    }

    onClick(): void {
      this.temp.push("still transferring");
  }

     getMarkColor(mark: number): string {
      if (mark >= 75) { 
      return 'green'; 
    } else if(mark >= 50 && mark < 75) {
      //color Amber
      return '#FFBF00'; 
    }
    else{
      return 'red'; 
    }
  }

  sendMessage():void{
    this.messageParent = "message from the Parent"
  }

  receiveMessage(message: string): void {
    this.messageChild = message;
  }

  increase(): void{
    this.childComponent.increaseByOne();
  }

  decrease(): void{
    this.childComponent.decreaseByOne();
  }


}