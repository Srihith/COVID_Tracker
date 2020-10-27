import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbAPIService {

  constructor(
	private http:HttpClient
  ) { }
  
  loginApiCall(email) {
	  var invokeURL = 'https://gyzx0ug56d.execute-api.us-east-2.amazonaws.com/trial2/email/';
	  var request = invokeURL.concat(email);
	  return this.http.get(request);	  
  }
  
  signUpApiCall(email, firstName, lastName, passwordInput, age) {
	  const headers = {'content-type': 'application/json'}  
	  var invokeURL = 'https://gyzx0ug56d.execute-api.us-east-2.amazonaws.com/trial2/'
	  var body = {email: email, password: passwordInput};
	  var JSONBody = JSON.stringify(body);
	  console.log(JSONBody);
	  return this.http.post(invokeURL, body);	  
  }
}
