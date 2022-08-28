import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Createbook } from '../model/createbook.model';


@Injectable({
    providedIn: 'root'
})

export class UpdatebookService {
    baseUrl = 'http://localhost:5212/api/Krutibas6'
    baseUrl1 = 'http://localhost:5212/api/Krutibas9'

    constructor(private http: HttpClient) { }

     //Get all books
     getAllBooks(): Observable<Createbook[]> {
        return this.http.get<Createbook[]>(this.baseUrl1);
    }

    deleteBook(bookId:string):Observable<Createbook>{
        return this.http.delete<Createbook>(this.baseUrl +'/'+bookId);
      }
    
      updateBook(book:Createbook):Observable<Createbook>{
        return this.http.put<Createbook>(this.baseUrl,book);
      }
}
