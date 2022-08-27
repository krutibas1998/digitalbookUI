import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Readerhomepage } from '../model/readerhomepage.model';

@Injectable({
    providedIn: 'root'
  })

  export class ReaderhomepageService
  {
    baseUrl= 'http://localhost:5212/api/Krutibas9'

    constructor(private http:HttpClient){}

    getAllBooks():Observable<Readerhomepage[]>{
        return this.http.get<Readerhomepage[]>(this.baseUrl);
    }
  }