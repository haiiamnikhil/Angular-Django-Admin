import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/apiservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  profiledrop:boolean = false;
  public now = new Date()

  constructor(private router:Router, private api: ApiService) { 
    setInterval(() => {
      this.now = new Date()
    },1)}

  ngOnInit(): void {
  }

  logout(){
    this.api.logoutuser().subscribe(response=>{
      if(response.status){
        this.router.navigate(['/login'])   
      }
    },
    error=>console.log(error)
    )
  }
}
