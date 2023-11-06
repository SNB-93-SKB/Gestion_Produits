import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin!:FormGroup;

  constructor(private fb:FormBuilder,private router:Router){

  }
  ngOnInit() {
    this.formLogin=this.fb.group({
      username:this.fb.control(""),
      password:this.fb.control(""),
    })
  }
  handelLogin(){

    console.log(this.formLogin.value); 
     if(this.formLogin.value.username=="admin" && this.formLogin.value.password=="123"){
this.router.navigateByUrl("/admin");
     }
  }
}
