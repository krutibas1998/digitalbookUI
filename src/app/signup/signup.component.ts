import { Component, OnInit } from '@angular/core';
import { Signup } from '../model/signup.model';
import { userService } from '../services/signup.services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup:Signup={
    userName:'',
    userType:'',
    password:''
  }

  constructor(private userService:userService) {}

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.signup.userName!==''){
      this.userService.addUser(this.signup)
      .subscribe(
        response => {
          console.log(response);
          this.signup = {
            userName:'',
            userType:'',
            password:''
          };
        }
      );
    } else{
      console.log('Login failed');
    }
  }


}
