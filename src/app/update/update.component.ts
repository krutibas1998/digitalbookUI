import { Component, OnInit } from '@angular/core';
import { Createbook } from '../model/createbook.model';
import { UpdatebookService } from '../services/update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  books:Createbook[]=[];
  ShowFields:boolean=false;
  Showgrid:boolean=true;
  book:Createbook={
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
 

  constructor(private UpdatebookService:UpdatebookService ) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.UpdatebookService.getAllBooks()
    .subscribe(
      response => { this.books = response
      this.Showgrid=true;
      this.ShowFields=false;
      }
    );
  }
  onSubmit(book:any){
    this.Showgrid=false;
    this.ShowFields=true;
    this.book = book ;
  }

  updateBook(book:Createbook){
    console.log(book);
    this.UpdatebookService.updateBook(book)
    .subscribe(
      response => {
        this.getAllBooks();
      }
    )
  }


}
