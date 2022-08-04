import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignUpModel } from 'src/app/models/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public confirmpass:any;
  public qrcodetext:string
   public signup :SignUpModel;
  collapsed:boolean=true;
  dropdown:boolean=true

  constructor() {
    this.signup=new SignUpModel();
  }

  ngOnInit(): void {
  }

  onSubmit(_form:NgForm){

    console.log(this.signup);

    // this.User.push(this.login.email, this.login.password)

  }

}
