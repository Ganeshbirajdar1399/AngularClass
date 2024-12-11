import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { PipeComponent } from '../pipe/pipe.component';

@Component({
  selector: 'app-view-child',
  standalone: false,
  
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
  @ViewChild('changetext') hellodiv !: ElementRef
  @ViewChild('pipeComp') pipeComp !: PipeComponent

  changeText(){
    this.hellodiv.nativeElement.innerText ='text changed'
    this.hellodiv.nativeElement.style.color ='red'
  }  
  callPipeFunc(){
    this.pipeComp.greetingFunction()
  }
  }

