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
  constructor(private fb:FormBuilder,public dataservice:DataService) { }

  ngOnInit(): void {
  }
  deposit(){
    if(this.depositForm.valid){
      alert("form valid")
      this.dataservice.deposit(this.depositForm.value.accno,this.depositForm.value.pswd,this.depositForm.value.amount)
    }
      else{
        alert("form not valid");
      }
    }
  withdraw(){
  if(this.withdrawForm.valid){
    alert("form valid")
    this.dataservice.withdraw(this.withdrawForm.value.accno,this.withdrawForm.value.pswd,this.withdrawForm.value.amount)
  }
    else{
      alert("form not valid");
    }
  }
  

}
