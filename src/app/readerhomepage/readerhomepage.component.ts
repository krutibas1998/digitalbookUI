import { Component, OnInit } from '@angular/core';
import { Readerhomepage } from '../model/readerhomepage.model';
import { ReaderhomepageService } from '../services/readerhomepage.service';

@Component({
  selector: 'app-readerhomepage',
  templateUrl: './readerhomepage.component.html',
  styleUrls: ['./readerhomepage.component.css']
})
export class ReaderhomepageComponent implements OnInit {
  showIcon : boolean = false;
  iconMargin:any ="5px";
  iconWidth:any ="5px";
  Readerhomepages:Readerhomepage[]=[];
  Readerhomepage:Readerhomepage={
    bookId:'',
    logo:'',
    title:'',
    category:'',
    price:'',
    authorId:'',
    publisher:'',
    publishesDate:'',
    content:'',
    active:'',
    createDate:'',
    modifiedDate:''
  }

  constructor(private ReaderhomepageService:ReaderhomepageService) { }

 hideAndShow(): void{
    this.showIcon = !this.showIcon;
  }
  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.ReaderhomepageService. getAllBooks()
    .subscribe(
      response => { this.Readerhomepages = response}
    );
  }

}
