import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { DbAPIService } from './db-api.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid-tracker';
  firstName: string;
  password: string;
  constructor(
		public dialog: MatDialog,
		private api: DbAPIService,
		private router: Router
	) {}
	
	ngOnInit(): void {
		if(!sessionStorage.getItem('loggedIn')){
			sessionStorage.setItem('loggedIn', 'false');
			this.router.navigateByUrl('app-global');
		}
		//sessionStorage.setItem('firstName', '');
		//sessionStorage.setItem('lastName', '');
		// sessionStorage.setItem('email', null);
		// sessionStorage.setItem('age', null);
		// sessionStorage.setItem('password', null);
		// sessionStorage.setItem('friends', null);
	}

  openDialogLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
    // width: '1000px',
    //data: {firstName: this.firstName, password: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //console.log(result);
      //this.animal = result;
    });
  }

  openDialogSignup(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      //width: '1000px',
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      //this.animal = result;
    });
  }
  
  signOut(): void {
	sessionStorage.setItem('loggedIn', 'false');
	sessionStorage.setItem('firstName', null);
	sessionStorage.setItem('lastName', null);
	sessionStorage.setItem('email', null);
	sessionStorage.setItem('age', null);
	sessionStorage.setItem('password', null);
	sessionStorage.setItem('friends', null);

	  this.router.navigateByUrl('app-me');
	  if(window.location.pathname == '/app-me') {
		window.location.reload();
	  }
  }


}
