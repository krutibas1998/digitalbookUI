import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Createbook } from '../model/createbook.model';

@Injectable({
    providedIn: 'root'
})

export class CreatebookService {
    baseUrl = 'http://localhost:5212/api/Krutibas5'

    constructor(private http: HttpClient) { }


    //Get all books
    getAllBooks(): Observable<Createbook[]> {
        return this.http.get<Createbook[]>(this.baseUrl);
    }

     //Add book
  addAllBooks(book:Createbook):Observable<Createbook[]> {
     book.bookId = 0;//'00000000-0000-0000-0000-000000000000';
    return this.http.post<Createbook[]>(this.baseUrl, book,
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("token")?.toString(),
          'Content-Type': 'application/json'
        })
      }
      );
  }

  deleteBook(bookId:string):Observable<Createbook>{
    return this.http.delete<Createbook>(this.baseUrl +'/'+bookId);
  }

  updateBook(book:Createbook):Observable<Createbook>{
    return this.http.put<Createbook>(this.baseUrl +'/'+book.title,book);
  }

}