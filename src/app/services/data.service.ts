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
currentuser:any
  constructor() {

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


  register(username:any,acno:any,name:any,password:any){
    if (acno in this.accountDetails){
      alert("user alredy exist");
      return false
    }
    
    this.accountDetails[acno]={
      acno,
      name,
      balance:0,
      password
    }
    this.saveDetails();
    alert("registration successfully work")
    console.log(this.accountDetails)
    return true;
    
  }

     login(accno:any,pswd:any){
       

        if (accno in this.accountDetails) {
      var psw1=this.accountDetails[accno].password

        if (psw1==pswd) {
           this.currentuser=this.accountDetails[accno].name;
           this.saveDetails();
            alert("authentication success")
            return true;
            
            
        }
        else {
            alert("invalid password")
            return false;
        }
      
    }
    else {
        alert("invalid account number")
        return false;
    }
  }

  deposit(accno:any,pswd:any,amount:any){
    var amt=parseInt(amount);
    let dataset=this.accountDetails;

    if (accno in dataset) {
      var psw1=dataset[accno].password;

        if (pswd==psw1) {
          dataset[accno].balance+=amt;
          this.saveDetails();
           //this.currentuser=this.accountDetails[accno].name;
            alert("Account creadited with amount:"+amount+"balance is:"+dataset[accno].balance);
            
            
        }
        else {
            alert("invalid password")
            
        }
      
    }
    else {
        alert("no user exist with provided accno")
        
    }
  }


  withdraw(accno:any,pswd:any,amount:any){
    var amt=parseInt(amount);
    let dataset=this.accountDetails;

    if (accno in dataset) {
      var psw1=dataset[accno].password;

        if (pswd==psw1) {
          if(dataset[accno].balance>=amt){
          dataset[accno].balance-=amt;
          this.saveDetails();
          
           //this.currentuser=this.accountDetails[accno].name;
            alert("Account debited with amount: "+amount+" balance is:"+dataset[accno].balance);
          }
          else{
            alert("insufficint balance balance="+dataset[accno].balance)
          }
            
            
        }
        else {
            alert("invalid password")
            
        }
      
    }
    else {
        alert("no user exist with provided accno")
        
    }
  }


  }

