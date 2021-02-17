import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username:string
  password:string
  confirmpassword:string
  email:string
  first_name:string
  last_name:string
  message = []

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.islogedin().subscribe(response=>{
      if(response.status){
        this.router.navigate(['/'])
      }
    },
    error=>console.log(error)
    )
  }

  registerUser(){
    if(this.password == this.confirmpassword){
      let credetials = {
        username:this.username,
        password:this.password,
        email:this.email,
        first_name:this.first_name,
        last_name:this.last_name
      }
      this.api.register(credetials).subscribe(response=>{
        if(response.status){
          this.router.navigate(['/login'])
        }
        this.message.push({message:response.message,status:response.status})
      },
      error=>{
        this.router.navigate(['/register'])
      }
      )
    }
    this.message.push({message:"Passwords Not Matched"})
    }
}
