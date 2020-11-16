import { Component, OnInit } from '@angular/core';
import { DbAPIService } from '../db-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
	public isIn: String;
	public email: String;
	public name: String;
	public age: String;
	public firstName: String;
	public lastName: String;
	public pass: String;
	public friendsList: String;

  constructor(  	
	private api: DbAPIService,
	private router: Router	
	) { }

  ngOnInit(): void {
	this.isIn = sessionStorage.getItem('loggedIn');
	this.router.onSameUrlNavigation = 'reload';
	this.friendsList = sessionStorage.getItem('friends');
	console.warn(this.friendsList);
	this.populateFriends(false, null);
  }
  
  testAdd(friendEmail) {
	this.firstName = sessionStorage.getItem('firstName');
	this.lastName = sessionStorage.getItem('lastName');
	this.pass =  sessionStorage.getItem('password');
	var friendsArray = this.friendsList.split(","); 

	this.api.loginApiCall(friendEmail).subscribe((data) => {
		this.ngOnInit();
		if(data.Count == 0) {
			console.warn("User does not exist");
			console.warn(friendsArray);
			console.warn(friendsArray.indexOf('j') > -1);
		} 
		else if(data.Count == 1) {
			if(friendsArray.indexOf(friendEmail) > -1) {
				console.warn("You are already friends with this user");
			} else if(friendEmail === sessionStorage.getItem('email')) {
				console.warn("That is your email.");
			} else {
				var friendsList2 = data.Items[0].friends.S;
				console.warn(friendsList2);
				friendsList2 = friendsList2.concat(',').concat(sessionStorage.getItem('email'));
				console.warn(friendsList2);
				this.api.addFriendApiCall(data.Items[0].email.S, data.Items[0].firstName.S, data.Items[0].lastName.S, data.Items[0].password.S, data.Items[0].age.S, friendsList2).subscribe((data) => {  
				})
				
				this.friendsList = this.friendsList.concat(',').concat(friendEmail);
				this.api.addFriendApiCall(sessionStorage.getItem('email'), this.firstName, this.lastName, this.pass, sessionStorage.getItem('age'), this.friendsList).subscribe((data) => {  
				})
				while(this.friendlist.length > 0) {
					this.friendlist.pop();
				}
				this.populateFriends(true, friendEmail);
			}
		}
	})
 }
	friendlist = [ ];
	num = 0;
	friend = "";
	
	populateFriends(reload, emailToAdd)
	{
		if(reload) {
			this.api.loginApiCall(emailToAdd).subscribe((data) => {
						this.friendlist.push({name: data.Items[0].firstName.S.concat(' ').concat(data.Items[0].lastName.S), risk: 100, whatever: "whatever"});
			})
		} else {
			if(this.friendsList === null) {
				console.warn("Empty friends list");
			} else {
				for (let friendsListEmail of this.friendsList.split(",")) {
					if(friendsListEmail === 'ph') {
						continue;
					} else {
						this.api.loginApiCall(friendsListEmail).subscribe((data) => {
							this.friendlist.push({name: data.Items[0].firstName.S.concat(' ').concat(data.Items[0].lastName.S), risk: 100, whatever: "whatever"});
						})
					}
				}
			}
		}
	}
}
