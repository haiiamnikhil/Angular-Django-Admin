import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string
  password: string
  message = []
  constructor(private authService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.authService.islogedin().subscribe(response => {
      if (response.status) {
        this.router.navigate(['/']);
      }
    },
      error => {
        this.router.navigate(['/login']);
      }
    )
  }

  loginUser() {
    let credentials = {
      username: this.username,
      password: this.password
    }
    this.authService.login(credentials).subscribe(response => {
      if (response.status) {
        console.log(response)
        this.router.navigate(['/'])
      }
      this.message.push({message:response.message,status:false})
    },
      error => {
        this.router.navigate(['/login'])
      }
    )
  }

}
