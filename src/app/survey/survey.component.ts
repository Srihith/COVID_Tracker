import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  q1="";
  q2="";
  q3="";
   test(q1, q2, q3) {
   sessionStorage.setItem('risk1', "false");
   		 //sessionStorage.setItem('risk1', one.value.toString());

		 //window.alert(sessionStorage.getItem('risk1'));
		 sessionStorage.setItem('risk1', q1.toString());
		 sessionStorage.setItem('risk2', q2.toString());
		 sessionStorage.setItem('risk3', q3.toString());
		 window.location.reload();
		 }
}
