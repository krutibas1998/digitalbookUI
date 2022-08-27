import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchasebook } from '../model/purchasebook.model';

@Injectable({
    providedIn: 'root'
})

export class PurchasebookService {
    baseUrl = 'http://localhost:5212/api/Krutibas11'
    baseUrl1 = 'http://localhost:5212/api/Krutibas11'

    constructor(private http: HttpClient) { }

    //Get all books
    getAllPayment(): Observable<Purchasebook[]> {
        return this.http.get<Purchasebook[]>(this.baseUrl1);
    }



    
//Add book
    CreatePayment(payment: Purchasebook): Observable<Purchasebook[]> {
        payment.paymentId = 0;
        return this.http.post<Purchasebook[]>(this.baseUrl, payment);
    }
}