import { Component, OnInit } from '@angular/core';
import { Createbook } from '../model/createbook.model';
import { CreatebookService } from '../services/createbook.services';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {

  constructor(private CreatebookService:CreatebookService) { }
  books: Createbook[]=[];
  book: Createbook={
    bookId:0,
    logo:'',
    title:'',
    category:'',
    price:'',
    authorId:'',
    publisher:'',
    publishesDate:'',
    content:'',
    active:'',
    createdDate:'',
    modifiedDate:''
  }
  msg:any="";
  ngOnInit(): void {
    
  }

  getAllBooks() {
    this.CreatebookService.getAllBooks()
    .subscribe(
      response => { this.books = response}
    );
  }

  onSubmit(){
    if(this.book.bookId===0){
      this.CreatebookService.addAllBooks(this.book)
      .subscribe(
        response => {
          this.getAllBooks();
          this.book = {
            bookId:0,
           logo:'',
           title:'',
           category:'',
           price:'',
           authorId:'',
           publisher:'',
           publishesDate:'',
           content:'',
           active:'',
           createdDate:'',
           modifiedDate:''
          };
        
        }
      );
    }
    else{
      this.updateBook(this.book);
    }    
  }

  deleteBook(bookId:string){
    this.CreatebookService.deleteBook(bookId)
    .subscribe(
      response => {
        this.getAllBooks();
      }
    )
  }

  populateForm(book:Createbook){
    this.book = book;

  }

  updateBook(book:Createbook){
    this.CreatebookService.updateBook(book)
    .subscribe(
      response => {
        this.getAllBooks();
      }
    )
  }
 


}
