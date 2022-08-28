import { Component, OnInit } from '@angular/core';
import { PurchasebookService } from '../services/purchasebook.services';
import { Purchasebook } from '../model/purchasebook.model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoice:Purchasebook[]=[];

  constructor(private PurchasebookService:PurchasebookService) { }

  ngOnInit(): void {
    this.getAllPayment();
  }

  getAllPayment() {
    this.PurchasebookService.getAllPayment()
    .subscribe(
      response => { this.invoice = response}
    );
  }
}
 


