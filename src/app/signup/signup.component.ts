import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { DbAPIService } from '../db-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
		private api: DbAPIService,
  ) { }

  ngOnInit(): void {
  }

  firstName="";
  lastName="";
  password="";
  age="";
  data=[this.firstName,this.lastName,this.password,this.age];
	
 signUpAttempt(email, firstName, lastName, passwordInput, age) {	  
	  this.api.signUpApiCall(email, firstName, lastName, passwordInput, age).subscribe((data) => {
		  
	  })
  } 
}
