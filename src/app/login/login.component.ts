import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { MatDialog } from '@angular/material/dialog';
import { DbAPIService } from '../db-api.service';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
	private api: DbAPIService,
	private router: AppRoutingModule,
	private matDialog: MatDialog
	) {}
  
  ngOnInit(): void {
  }

  firstName="";
  password="";
  data=[this.firstName,this.password];

loginAttempt(email, password) {	  
	  this.api.loginApiCall(email).subscribe((data) => {
		  if(data.Count == 0) {
			console.warn("Email does not exist");
		  } else if(data.Count == 1) {
			if(password == data.Items[0].password.S) {
				console.warn("Login Successful");
				this.matDialog.closeAll();
				//this.router.navigateByUrl('app-me');
			} else {
				console.warn("Incorrect Password");
			}
		  }
	  })
  } 

}
