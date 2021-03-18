import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dataservice:DataService,private router:Router) { }
  uname="";
  accno="";
  pswd="";

  ngOnInit(): void {
  }
  register()
  {
    //alert("registration successfull")
    var result=this.dataservice.register(this.accno,this.uname,this.pswd)
    if(result){
      this.router.navigateByUrl("");

    }
    else{
      this.router.navigateByUrl("");

    }
    console.log(this.accno,this.uname,this.pswd)
  }

}
