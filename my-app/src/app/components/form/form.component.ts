import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: false,
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
constructor(private route:ActivatedRoute){} //dependency injection
showValue() {
this.route.params.subscribe((p)=>{
  console.log(p['id'])
})
this.route.queryParamMap.subscribe((element)=>{
console.log('fname from query: '+ element.get('fname'));
console.log('role from query: '+ element.get('role'))
})
}
}
