import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userSchema } from '../modules/users/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url:string="http://localhost:3000"

  constructor(private http:HttpClient) { }

  // to get admin details
  adminDetails(){
    // api call to http://localhost:3000/users/1
    return this.http.get(`${this.base_url}/users/1`)
  }

  // to get all user data from json file
  getallUsers(){
    
    // http://localhost:3000/users:--api call to this url
       return  this.http.get(`${this.base_url}/users`)
  }
 // addUser
   addUser(user:userSchema){
        // http://localhost:3000/users:--api call to this url -----body pass
        return this.http.post(`${this.base_url}/users` ,user)
       }

  // get existing user (single person)
  getexisting(id:any){
   return this.http.get(`${this.base_url}/users/${id}`)
  }

  // update user
  updateUser(id:any,data:userSchema){
   return this.http.put(`${this.base_url}/users/${id}`,data)
  }

  // deleteuser
  deleteUser(id:any){
   return this.http.delete(`${this.base_url}/users/${id}`)
  }



}


