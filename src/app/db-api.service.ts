import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbAPIService {

  constructor(
	private http:HttpClient,
	private router: Router
  ) { }
  
  loginApiCall(email) {
	  var invokeURL = 'https://gyzx0ug56d.execute-api.us-east-2.amazonaws.com/trial2/email/';
	  var request = invokeURL.concat(email);
	  return this.http.get(request);	  
  }
  
  signUpApiCall(email, firstName, lastName, passwordInput, ageInput) {
	 var invokeURL = 'https://gyzx0ug56d.execute-api.us-east-2.amazonaws.com/trial2/'
	 var body = {email: email, password: passwordInput, firstName: firstName, lastName: lastName, age: ageInput};
	 var JSONBody = JSON.stringify(body);
	 console.log(body);
	  
	return this.http.post(invokeURL, body);	  
  }
}