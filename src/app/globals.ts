import { Injectable } from '@angular/core';

@Injectable()
export class Globals{
    loggedIn = false;
	firstName = "";
	lastName = "";
	age = 0;
	mePath = './me.component.html';
}