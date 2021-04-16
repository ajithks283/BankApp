import { Component, OnInit } from '@angular/core';
//import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // depositForm=this.fb.group({
  //   accno:["",],
  //   pswd:["",],
  //   amount:["",]
  // });

  depositForm = this.fb.group({
    //uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    accno:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]

  });
  
  withdrawForm = this.fb.group({
    //uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    accno:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]


  });
  id="1234";
  name:any;
  acno:any;
  constructor(private fb:FormBuilder,public dataservice:DataService) {
    this.name=localStorage.getItem("name")
   }

  ngOnInit(): void {
  }
  deposit(){
    if(this.depositForm.valid){
      alert("form valid")
      this.dataservice.deposit(this.depositForm.value.accno,this.depositForm.value.pswd,this.depositForm.value.amount)
      .subscribe((data:any)=>{
        if(data){
          alert(data.message);
          alert(data.balance);
        }
      },(data)=>{
        alert(data.error.message);
        })
    }
      else{
        alert("form not valid");
      }
    }
  withdraw(){
  if(this.withdrawForm.valid){
    alert("form valid")
    this.dataservice.withdraw(this.withdrawForm.value.accno,this.withdrawForm.value.pswd,this.withdrawForm.value.amount)
    .subscribe((data:any)=>{
      if(data){
        alert(data.message);
        alert(data.balance);
      }
    },(data)=>{
      alert(data.error.message);
      })
  }
    else{
      alert("form not valid");
    }
  }

  delete(){
    this.acno=localStorage.getItem("acno");
    //alert(this.acno);
  }
  onDelete($event:any){
    alert("this is an alert from parent" +$event);
    this.acno=null;
  }
  onCancel(){
    this.acno=null;
  }
   
  }
  


