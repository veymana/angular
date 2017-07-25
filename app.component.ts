import { UserService } from './user.service';
import { Response } from '@angular/http';

import { Component, OnInit } from '@angular/core';
import { ApplicationError } from './common/base-app.error'
import { UserDetails } from './user.model';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BoardValidators } from './validators/board.validators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private userService: UserService) { }
  users: UserDetails[];

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', BoardValidators.invalidAmount)
  });

  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  login() {
    if (!this.form.valid) {
      console.log("Invalid Form ...");
    } else {
      console.log("Form is valid ...")
    }

    console.log(this.form.get('username').touched);
    console.log(this.form.get('username').value);

  }
  ngOnInit() {
    this.userService.getUsers().subscribe((userDeatils: UserDetails[]) => {
      console.log("GOT THE RESPONSE:>>> " + userDeatils.length);
      console.log(userDeatils[0].id);
      console.log(userDeatils[0].title);
      console.log(userDeatils[0]);

    },
      error => {
        if (error instanceof ApplicationError) {
          console.log(" Error Code:" + error.errorCode + " Error Msg:" + error.errorMsg);
        } else {
          throw new error;
        }
      }
    );
  }
}
