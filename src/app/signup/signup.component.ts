import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { FormsModule ,Validators,FormControl} from '@angular/forms'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstName="";
  lastName="";
  password="";
  age="";
  email="";
  data=[this.firstName,this.lastName,this.email,this.password,this.age];
  onSubmit(){
    if(this.firstName==""||this.password==""||this.lastName==""||this.age==""||this.email==""){
      window.alert("Not all fields filled out");
    } 
    else{
      window.alert("Submitted");
    }
  }
}
