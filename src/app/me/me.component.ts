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
import * as tf from '@tensorflow/tfjs';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
  providers: [ Globals, LoginComponent ]
})
export class MeComponent implements OnInit {

  @ViewChild('loggedInTemplate') loggedInTemplate: TemplateRef<any>;
  @ViewChild('loggedOutTemplate') loggedOutTemplate: TemplateRef<any>;
  public linearModel: tf.Sequential;
  public prediction: any;
  public isIn: String;
  public userEmail: String;
  public name: String;
  public age: String;
  public firstName: String;
  public lastName: String;
  public pass: String;
  public friendsList: String;
  public risk1: String;
  public risk2: String;
  public risk3: String;
  public risk: any;
  public temp: any;

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
	this.risk1 =  sessionStorage.getItem('risk1');
	this.risk2 =  sessionStorage.getItem('risk2');
	this.risk3 =  sessionStorage.getItem('risk3');
	this.risk = 0;
	this.age = sessionStorage.getItem('age');

	if(sessionStorage.getItem('firstName')) {
		this.name = sessionStorage.getItem('firstName').concat(' ').concat(sessionStorage.getItem('lastName'));
	}


	//window.alert(this.risk.toString());
	if(this.risk1.localeCompare("true")==0){
		this.risk= this.risk+1;
	}
	//window.alert(this.risk.toString());
	if(this.risk2.localeCompare("true")==0){
		this.risk= this.risk+2;
	}
	//window.alert(this.risk.toString());
	if(this.risk3.localeCompare("true")==0){
		this.risk= this.risk+3;
	}
	//window.alert(this.risk.toString());
	//this.risk= this.risk+(parseInt(this.age)/10);
			//window.alert(this.risk.toString());

	this.train();
	this.predict(this.risk);
	this.prediction = this.prediction+5;
	this.temp = this.prediction.toString();
	this.temp = this.temp.substring(0,5);
  sessionStorage.setItem('score', this.temp);
  this.api.signUpApiCall(sessionStorage.getItem('email'), sessionStorage.getItem('firstName'), sessionStorage.getItem('lastName'),
   sessionStorage.getItem('password'), sessionStorage.getItem('age'), sessionStorage.getItem('friends'), sessionStorage.getItem('score')).subscribe((data) => {});

	//window.alert(this.prediction.toString());








	//boolean temp = document.getElementById('q13')
	//Boolean temp2= true;
	//this.age = document.getElementById('q13').toString();
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
	  		 window.location.reload();

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





  predict(val: number) {
  const output = this.linearModel.predict(tf.tensor2d([val], [1, 1])) as any;
  this.prediction = Array.from(output.dataSync())[0]
}

  async train(): Promise<any> {
      // Define a model for linear regression.
    this.linearModel = tf.sequential();
    this.linearModel.add(tf.layers.dense({units: 1, inputShape: [1]}));
    // Prepare the model for training: Specify the loss and the optimizer.
    this.linearModel.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
    const xs = tf.tensor1d([3.2, 4.4, 5.5]);
    const ys = tf.tensor1d([1.6, 2.7, 3.5]);
    // Train
    await this.linearModel.fit(xs, ys)
    console.log('model trained!')
  }


}
