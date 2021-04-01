import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  uname="";
  accno="";
  pswd="";
  
  registerForm = this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    accno:['',[Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  });
  constructor(private dataservice:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register()
  {
    //console.log(this.registerForm.get('uname')?.errors);
    if(this.registerForm.valid){
      alert("form valid")
      //alert("registration successfull")
    var result=this.dataservice.register(this.registerForm.value.accno,this.registerForm.value.uname,this.registerForm.value.pswd)
    if(result){
      this.router.navigateByUrl("");

    }
    else{
      this.router.navigateByUrl("");

    }
    }
    else{
      alert("invalid form")
    }
    //console.log(this.registerForm.value);
    
    //console.log(this.accno,this.uname,this.pswd)
  }

}
