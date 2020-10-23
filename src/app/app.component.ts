import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid-tracker';

  constructor(public dialog: MatDialog) {}

  openDialogLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
     // width: '1000px',
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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
      //this.animal = result;
    });
  }


}
