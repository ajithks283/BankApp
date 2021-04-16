import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   
aim="fgfg"
uname="Enter name";
psw="";
password="";
accno="account number pleas";


loginForm = this.fb.group({
  accno:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

});
  
constructor(private router:Router,private dataservice:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  getUsername(event:any){
    this.uname=event.target.value;
    console.log(this.uname)

  }
  pswdChange(event:any){
    this.psw=event.target.value;
    console.log(this.psw)

  }
login(){
  
  if(this.loginForm.valid){
    alert("form valid")
    var accnom = this.loginForm.value.accno;
    var passw = this.loginForm.value.pswd;
    console.log(accnom);

    this.dataservice.login(accnom,passw)
    .subscribe((data:any)=>{
      if(data){
        alert(data.message);
        localStorage.setItem("name",data.name)
        localStorage.setItem("acno",data.acno)
        //alert(data.name);
        this.router.navigateByUrl("dashboard");
      }
    },(data)=>{
      alert(data.error.message);
    })
  }
     else{
       alert("invalid form");

     }

   }
  
  
  // let accnom = document.querySelector("#acno").value;//1000
  //       let passw = document.querySelector("#pwd").value;
  //       // alert(passw)
  //       // alert("inside login")
  //       let data = Bank.getAccountDetails();
  //       //console.log(data);
  //       if (accnom in data) {
  //           if (passw == data[accnom]["password"]) {
  //               alert("authentication success")
  //               window.location.href = "userhome.html";
  //           }
  //           else {
  //               alert("invalid password")
  //           }
  //           //     alert("user exist")
  //           // }
  //           // else {
  //           //     alert("ther is no user")
  //           // }

  //       }
  //       else {
  //           alert("invalid account number")
  //       }

}

