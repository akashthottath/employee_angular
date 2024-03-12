import { Component } from '@angular/core';
import { userSchema } from '../user.model';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user:userSchema={}

  // constructor
  constructor(private api:ApiService,private addroute:Router){}

// add user
  addUser(){
    // destructure
    const{id,name,email,active}=this.user

    if(!id||!name||!email||!active){
      alert("please fill the form completely")
    }else{
      this.api.addUser(this.user).subscribe({
        next:(res:any)=>{
          alert("new user successfully added")
          this.addroute.navigateByUrl('/users')
        },
        error:(err:any)=>{
          alert("can not perform action now please try after some time")
        }
      })
    }
  }

  // cancel
  cancel(){
    this.user={}
  }

}
