import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router:Router){}
  user = {fname:'anand',role:'developer'}
  navToForm(){
    // this.router.navigate(['/form',12]);
    this.router.navigate(['/form',12], {
      queryParams: this.user
    });
  }
}
