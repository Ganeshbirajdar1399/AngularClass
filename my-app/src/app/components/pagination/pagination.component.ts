import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-pagination',
  standalone: false,

  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  //search and sort variables
  searchText = '';
  orderColumn: string = 'name';
  isAsc: boolean = true;

  //pagination variables
  page = 1;
  itemsPerPage = 15; // Default items per page

  data!: any[];
  constructor(private authService: UserService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.authService.getCustomerData().subscribe((res) => {
      this.data = res;
      console.log('results', res);
    });
  }

  orderSort(field: string) {
    if (this.orderColumn === field) {
      this.isAsc = !this.isAsc; // Toggle order if sorting the same field
    } else {
      this.orderColumn = field;
      this.isAsc = true; // Default to ascending for a new field
    }
  }
}
