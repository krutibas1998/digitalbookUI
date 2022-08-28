import { Component, OnInit } from '@angular/core';
import { PurchasebookService } from '../services/purchasebook.services';
import { Purchasebook } from '../model/purchasebook.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchasebook',
  templateUrl: './purchasebook.component.html',
  styleUrls: ['./purchasebook.component.css']
})
export class PurchasebookComponent implements OnInit {

  payment:any = {
    paymentId:0,
    email: '',
    userId: 0,
    payment: new Date(),
    bookId: 0
  }
  constructor(private router:Router, private PurchasebookService:PurchasebookService) { }

  ngOnInit(): void {
  }
  
  
  onSubmit(): void {
    if (this.payment.email != '') {
      this.PurchasebookService.CreatePayment(this.payment).subscribe(response => {
        console.log(response);
       this.router.navigate(["/invoice"]);
      })
    } else { console.log('Payment failed'); }
  }
}
  
 

