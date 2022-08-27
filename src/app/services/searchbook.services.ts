import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Searchbook } from '../model/searchbook.model';

@Injectable({
    providedIn: 'root'
  })

export class SearchbookService{

    baseUrl= 'http://localhost:5212/api/Krutibas10'

    constructor(private http:HttpClient){}
   
    searchbook(searchbook:any):Observable<any[]>{
        return this.http.post<any[]>(this.baseUrl,searchbook);
    }

}