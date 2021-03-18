import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails:any = {
    1000: { acno: 1000, name: "userone", balance: 5000, password: "user1" },
    1001: { acno: 1001, name: "usertwo", balance: 6000, password: "user2" },
    1002: { acno: 1002, name: "userthree", balance: 15000, password: "user3" },
    1003: { acno: 1003, name: "userfour", balance: 45000, password: "user4" },
    1004: { acno: 1004, name: "userfive", balance: 2300, password: "user5" },
}

  constructor() { }
  register(acno:any,name:any,password:any){
    if (acno in this.accountDetails){
      alert("user alredy exist");
      return false
    }
    else{
    this.accountDetails[acno]={
      acno,
      name,
      balance:0,
      password
    }
    alert("registration successfully work")
    console.log(this.accountDetails)
    return true;
    }
  }
}
