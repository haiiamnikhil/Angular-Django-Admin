import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  login(credentials:any):Observable<any>{
    return this.http.post('/login-auth/',credentials,{headers:this.headers})
  }

  signup(credentials:any):Observable<any>{
    return this.http.post('/register/',credentials,{headers:this.headers})
  }

  islogedin():Observable<any>{
    return this.http.post('/login-auth/',{headers:this.headers})
  }
  
  register(credetials:any):Observable<any>{
    return this.http.post('/register-user/',credetials,{headers:this.headers})
  }
}
