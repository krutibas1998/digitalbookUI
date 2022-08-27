import { Component, OnInit } from '@angular/core';
import { Searchbook } from '../model/searchbook.model';
import { SearchbookService } from '../services/searchbook.services';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {

  constructor(private SearchbookService:SearchbookService) { }
  books:Searchbook[]=[];
  book:Searchbook={
    price:0,
    title:'',
    category:''

  }
  resp:any={};

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.SearchbookService.searchbook(this.book).subscribe(response=>{this.resp= response;
    console.log(this.resp)}); 
       
  }

}
