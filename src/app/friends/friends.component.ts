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
		this.friendlist.push(this.friend);		
		this.num = this.num + 1;
	}
	
}
