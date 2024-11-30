import { Component } from '@angular/core';
@Component({
  selector: 'app-parent',
  standalone: false,

  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  username = 'Anand';
  arrNumber = [1, 2, 3, 4];
  value = '';
  stringValue = '';
  fromChild = ''

  sendValue() {
    this.value = this.stringValue;
  }
  receiveFromChild(text:string){
console.log(text, 'text form child')
this.fromChild = text
  }
}
