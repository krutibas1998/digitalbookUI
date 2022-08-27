import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/Authentication.model';


@Injectable({
    providedIn: 'root'
  })

  export class AuthenticationService
  {
      baseUrl= 'http://localhost:5212/api/validate'

      constructor(private http:HttpClient){}

   
    
    addUser(login:Login):Observable<Login[]> {
        
        return this.http.post<Login[]>(this.baseUrl,login);
      }
  }
