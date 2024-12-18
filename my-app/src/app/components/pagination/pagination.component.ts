import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-pagination',
  standalone: false,
  
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  page = 1;
  itemsPerPage = 5; // Default items per page

  data!: any[];
 constructor(private authService: UserService){}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getData();
}

 getData(){
this.authService.getPostData().subscribe((res)=>{
this.data = res;
console.log('results', res)
})
 }
}
