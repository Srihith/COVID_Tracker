import { Component, OnInit, Input } from '@angular/core';
import { Globals } from '../globals';
import {UrlResolver} from '@angular/compiler';
import { ViewChild, TemplateRef } from '@angular/core';
import { LoginComponent } from '../login/login.component'
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

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
  public email: String;
  public name: String;
  public age: int;
  
  constructor(
	 public globals: Globals,
	 public login: LoginComponent,
	 private router: Router
  ) { }
  
  public ngOnInit(): void
  {
	this.isIn = sessionStorage.getItem('loggedIn');
	this.router.onSameUrlNavigation = 'reload';
	this.email = sessionStorage.getItem('email');
	this.name = sessionStorage.getItem('firstName').concat(' ').concat(sessionStorage.getItem('lastName'));
	this.age = sessionStorage.getItem('age');

  }
  
	readLocalStorageValue(key: string): string {
		console.warn(sessionStorage.getItem('loggedIn'));
		return localStorage.getItem(key);
	}
}

