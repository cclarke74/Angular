import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Controller
export class AppComponent {
//Model
  title: string = "Data Binding Examples";
  firstName: string = "Jack";
	lastName: string = "Martin";

    isDisabled: boolean = true;

    savedMessage: string = "";

    message: string = "";

    toggle: boolean= false;

    constructor(){
      setTimeout(()=>{
        this.isDisabled = false;
      },2000);
    }

    getName(): string{
      return this.firstName + ' ' + this.lastName;
    }

    getIsDisabled(): boolean {
      return this.isDisabled;
    }

    onSave(): void{
      this.savedMessage = "Message saved";
    }

    onToggle(): void{
      this.toggle = !this.toggle;
    }
    }
  