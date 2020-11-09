import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }
  
	friendlist = new Array();
	num = 0;
	friend = "";
	
	handleClick()
	{
		let temp = {name: this.friend, risk: this.num, whatever: "whatever"};
		this.friendlist.push(temp);		
		this.num = this.num + 1;
	}
	
}
