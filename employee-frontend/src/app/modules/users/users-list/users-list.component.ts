import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { userSchema } from '../user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  // class property
  allusers:userSchema[]=[]

  searchKey:string=""

  today=new Date()

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getUserList()
  }

  // when userList page open display all users from json file



  // to get Details of employees create a function
  getUserList(){
    this.api.getallUsers().subscribe({
      next:(result:any)=>{
        console.log(result);
        this.allusers=result
      },
      error:(res:any)=>{
        console.log(res);
        
      }
    })
  }
//  delete fn
  deleteUser(id:any){
    this.api.deleteUser(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getUserList()        
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

}
