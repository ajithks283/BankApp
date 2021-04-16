import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
   withCredentials:true
 }

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails:any = {
    1000: { acno: 1000, name: "Ajith", balance: 5000, password: "user1" },
    1001: { acno: 1001, name: "Akhil", balance: 6000, password: "user2" },
    1002: { acno: 1002, name: "userthree", balance: 15000, password: "user3" },
    1003: { acno: 1003, name: "userfour", balance: 45000, password: "user4" },
    1004: { acno: 1004, name: "userfive", balance: 2300, password: "user5" }
}
currentuser:any;
  constructor(private http:HttpClient) {

    this.getdetails();
   }
   saveDetails(){
     localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails))
     if(this.currentuser){
     localStorage.setItem("currentuser",JSON.stringify(this.currentuser))

   }
  }


getdetails(){
  if(localStorage.getItem("accountDetails")){
    this.accountDetails=JSON.parse(localStorage.getItem("accountDetails")||"")
  
 }
  if(localStorage.getItem("currentuser")){
    this.accountDetails=JSON.parse(localStorage.getItem("currentuser")||"")
  //}
 // if(localStorage.getItem("currentUser")){
    //this.accountDetails=JSON.parse(localStorage.getItem("currentUser")||'')
  //}

}
}


  register(acno:any,username:any,password:any){
    const data={
      acno,
      username,
      balance:0,
      password
    }
    return this.http.post("http://localhost:3000/register",data)

    // if (acno in this.accountDetails){
    //   alert("user alredy exist");
    //   return false
    // }
    
   
    // this.saveDetails();
    // alert("registration successfully work")
    // console.log(this.accountDetails)
    // return true;
    
  }

     login(acno:any,password:any){

      const data={
        acno,
        password
      }
      return this.http.post("http://localhost:3000/login",data,options)
       
  }

  deposit(acno:any,password:any,amount:any){
    const data={
      acno,
      password,
      amount
    }
    return this.http.post("http://localhost:3000/deposit",data,options)
    
  }


  withdraw(acno:any,password:any,amount:any){
    const data={
      acno,
      password,
      amount
    }
    return this.http.post("http://localhost:3000/withdraw",data,options)
    
  }


  }

