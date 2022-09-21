import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from 'src/app/models/login';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public confirmpass:any;
  public qrcodetext:string
   public login :LoginModel;
  collapsed:boolean=true;
  dropdown:boolean=true
  routes: Routes


  constructor() {
    this.login=new LoginModel();
   }


  onSubmit(_form:NgForm){
    
    console.log(this.login);

    // this.User.push(this.login.email, this.login.password)

  }

  ngOnInit(): void {
  }

}
