import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
   accountDetails:any = {
    1000: { acno: 1000, name: "userone", balance: 5000, password: "user1" },
    1001: { acno: 1001, name: "usertwo", balance: 6000, password: "user2" },
    1002: { acno: 1002, name: "userthree", balance: 15000, password: "user3" },
    1003: { acno: 1003, name: "userfour", balance: 45000, password: "user4" },
    1004: { acno: 1004, name: "userfive", balance: 2300, password: "user5" },
}
aim="fgfg"
uname="Enter name";
psw="";
pswd="";
accno="account number pleas";
  constructor(private router:Router) { }

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
    
    var accnom = this.accno;
    var passw = this.pswd;
    var dataset=this.accountDetails;
   
    if (accnom in dataset) {
      var psw1=dataset[accnom].password

        if (passw==psw1) {
            alert("authentication success")
            this.router.navigateByUrl('dashboard');
            
        }
        else {
            alert("invalid password")
        }
      
    }
    else {
        alert("invalid account number")
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
}
