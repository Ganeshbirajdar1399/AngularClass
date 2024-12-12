import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
// apiUrl = 'https://jsonplaceholder.typicode.com/users/10';
apiUrl = 'https://dummyjson.com/quotes?limit=3&skip=10'

  constructor(private http: HttpClient) { }

  fetchData():Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
