import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { DbAPIService } from '../db-api.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
		private api: DbAPIService,
		private router: Router,
		private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  firstName="";
  lastName="";
  password="";
  age="";
  email="";
  data=[this.firstName,this.lastName,this.password,this.age];
	
 signUpAttempt(email, firstName, lastName, passwordInput, age) {
	if(this.firstName==""||this.password==""||this.lastName==""||this.age==""||this.email==""){
      window.alert("Not all fields filled out");
    } else {
	  this.api.signUpApiCall(email, firstName, lastName, passwordInput, age, 'ph').subscribe((data) => {
		  
		  this.matDialog.closeAll();
		  //Store items in sessionStorage
		 sessionStorage.setItem('firstName', firstName);
		 sessionStorage.setItem('lastName', lastName);
		 sessionStorage.setItem('email', email);
		 sessionStorage.setItem('age', age);
		 sessionStorage.setItem('password', passwordInput);
		 sessionStorage.setItem('loggedIn', 'true');
		 sessionStorage.setItem('friends', 'ph');
		this.router.navigateByUrl('app-me');
		if(window.location.pathname == '/app-me') {
			window.location.reload();
		}
	  })
	}
  } 
}
