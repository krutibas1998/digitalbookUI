import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/Authentication.model';
import { AuthenticationService } from '../services/Authentication.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resp:any;
  login: Login = {
    userName: '',
    password: ''
  }
  

  constructor(private router:Router, private AuthenticationService: AuthenticationService) { }
  ngOnInit(): void {
  }

  // Add_B(){
  //   var output = this.AuthenticationService.addUser(this.login);
  //   if(output==true)
  // }
  
  onSumbit() {
    if (this.login.userName!='' && this.login.password!='') {
      this.AuthenticationService.addUser(this.login)
        .subscribe(
          response => {
            this.resp=response;
            console.log(response);
            localStorage.setItem("token", this.resp.token);
            console.log(localStorage.getItem("token"));
            this.router.navigate(["/createbook"]);
            
          }
        )
    } else {
      console.log('Login failed');
    }
  }
}
