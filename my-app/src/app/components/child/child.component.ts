import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,

  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  //@Input => Parent to child
  @Input() firstName = '';
  @Input() arrayNumber: number[] = [];
  @Input() string = '';
  @Input() fromParent = ''

  //@output => child to parent
  @Output() sendToParent = new EventEmitter();

  sendDataToParent(){
this.sendToParent.emit('Data from child');

  };
}
