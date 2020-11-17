import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DbAPIService } from '../db-api.service';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ Globals ],

})


export class LoginComponent implements OnInit {
	firstName="";
	password="";
	email="";
	data=[this.firstName,this.password];

  constructor(
	private api: DbAPIService,
	private router: Router,
	private matDialog: MatDialog,
	public globals: Globals
	) {}


  ngOnInit(): void {
  }


	loginAttempt(email, password) {
		// if(this.firstName==""||this.password==""){
			// window.alert("Not all fields filled out");
		// } else {
			this.api.loginApiCall(email).subscribe((data:any) => {
				if(data.Count == 0) {
					console.warn("Email does not exist");
				}
				else if(data.Count == 1) {
					if(password == data.Items[0].password.S) {
						this.firstName = data.Items[0].firstName.S;

						console.warn("Login Successful");
						sessionStorage.setItem('loggedIn', 'true');
						console.warn(sessionStorage.getItem('loggedIn'));

						this.matDialog.closeAll();
						this.router.navigateByUrl('app-me');

						if(window.location.pathname == '/app-me') {
							window.location.reload();
						}
						console.log(data.Items[0].age.N);
						//Store account info in the sessionStorage
						sessionStorage.setItem('firstName', data.Items[0].firstName.S);
						sessionStorage.setItem('lastName', data.Items[0].lastName.S);
						sessionStorage.setItem('email', data.Items[0].email.S);
						sessionStorage.setItem('age', data.Items[0].age.S);
						sessionStorage.setItem('password', data.Items[0].password.S);
						sessionStorage.setItem('friends', data.Items[0].friends.S);
            sessionStorage.setItem('score', data.Items[0].score.S);

						console.warn(data.Items[0]);
					} else {
						console.warn("Incorrect Password");
					}
				}
			})
		// }
	}
}
