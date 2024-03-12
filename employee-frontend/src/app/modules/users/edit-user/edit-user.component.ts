import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { userSchema } from '../user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  // property
  user: userSchema = {}

  // constructor
  constructor(private route:ActivatedRoute,private api:ApiService,private editroute:Router){}

  ngOnInit(): void {
    this.existingUser(this.user.id)
  }

  
  existingUser(id:any){
    this.route.params.subscribe((res:any)=>{
      console.log(res);
      const {id}=res
      console.log(id);
      this.api.getexisting(id).subscribe({
        next:(res:any)=>{
          console.log(res);
          
          this.user=res
        },
        error:(err:any)=>{
          console.log(err); 
        }
      })      
    })

  }

  // update user
  updateuser(){
    this.api.updateUser(this.user.id,this.user).subscribe({
        next:(res:any)=>{
          console.log(res); 
          alert('updated successfully')   
          this.editroute.navigateByUrl("/users")    
        },
        error:(err:any)=>{
          console.log(err);   
          alert('can not perform action now')      
        }
    })
  }

  // cancel update
  cancelUpdate(userId:any){
    this.existingUser(userId)
  }
    
}
