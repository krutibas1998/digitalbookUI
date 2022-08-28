import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './signup/signup.component'
import {LoginComponent} from './login/login.component'
import {ReaderhomepageComponent} from './readerhomepage/readerhomepage.component'
import {CreatebookComponent } from './createbook/createbook.component'
import {PurchasebookComponent} from './purchasebook/purchasebook.component'
import {SearchbookComponent} from './searchbook/searchbook.component'
import { NavbarComponent } from './navbar/navbar.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent}, 
  {path:'login',component:LoginComponent},
  {path:'',component:ReaderhomepageComponent},
  {path:'createbook',component:CreatebookComponent},
  {path:'purchasebook',component:PurchasebookComponent},
  {path:'searchbook',component:SearchbookComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'update',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[SearchbookComponent,SignupComponent,LoginComponent,ReaderhomepageComponent]