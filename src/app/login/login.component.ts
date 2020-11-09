import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  
  ngOnInit(): void {
  }
  
  firstName="";
  password="";
  data=[this.firstName,this.password];
  submit = false;
  onSubmit(){
    if(this.firstName==""||this.password==""){
      window.alert("Not all fields filled out");
    } 
    else{
      window.alert("Submitted");
    }
  }
}
