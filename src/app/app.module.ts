import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReaderhomepageComponent } from './readerhomepage/readerhomepage.component';
import { CreatebookComponent } from './createbook/createbook.component';
import { PurchasebookComponent } from './purchasebook/purchasebook.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ReaderhomepageComponent,
    CreatebookComponent,
    PurchasebookComponent,
    NavbarComponent,
    SearchbookComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
