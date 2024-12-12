import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}
  private data = [
    { id:1, name:'Arun', role:'MEAN developer'},
    { id:2, name:'Varun', role:'MERN developer'},
    { id:3, name:'Sarun', role:'Native developer'},
  ]

  getStaticData(){
    return this.data
  }
}
