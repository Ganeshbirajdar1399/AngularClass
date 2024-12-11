import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: false,

  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  firstName = 'Anand';
  // currency = 3000
  date = new Date();

  greetingFunction(){
    console.log("greeting from pipes");
  }
}
