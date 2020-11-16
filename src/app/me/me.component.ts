import { Component, OnInit, Input } from '@angular/core';
import { Globals } from '../globals';
import {UrlResolver} from '@angular/compiler';
import { ViewChild, TemplateRef } from '@angular/core';
import { LoginComponent } from '../login/login.component'
import { SignupComponent } from '../signup/signup.component'
import { SurveyComponent } from '../survey/survey.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DbAPIService } from '../db-api.service';
import {MatDialog} from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
  providers: [ Globals, LoginComponent ]
})
export class MeComponent implements OnInit {

  @ViewChild('loggedInTemplate') loggedInTemplate: TemplateRef<any>;
  @ViewChild('loggedOutTemplate') loggedOutTemplate: TemplateRef<any>;

  public isIn: String;
  public userEmail: String;
  public name: String;
  public age: String;
  public firstName: String;
  public lastName: String;
  public pass: String;
  public friendsList: String;

  constructor(
  	private api: DbAPIService,
	 public globals: Globals,
	 public login: LoginComponent,
	 private router: Router,
   public dialog: MatDialog
  ) { }

  public ngOnInit(): void
  {
	this.isIn = sessionStorage.getItem('loggedIn');
	this.router.onSameUrlNavigation = 'reload';
	this.userEmail = sessionStorage.getItem('email');
	this.firstName = sessionStorage.getItem('firstName');
	this.lastName = sessionStorage.getItem('lastName');
	this.pass =  sessionStorage.getItem('password');
	if(sessionStorage.getItem('firstName')) {
		this.name = sessionStorage.getItem('firstName').concat(' ').concat(sessionStorage.getItem('lastName'));
	}
	this.age = sessionStorage.getItem('age');
	this.friendsList = sessionStorage.getItem('friends');
  }

	readLocalStorageValue(key: string): string {
		console.warn(sessionStorage.getItem('loggedIn'));
		return localStorage.getItem(key);
	}

openDialog(): void {
    let dialogRef = this.dialog.open(SurveyComponent,{width: '700px'});


    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
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

}
