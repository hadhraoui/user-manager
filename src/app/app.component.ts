import { Component } from '@angular/core';
import * as moment from 'moment';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-manager';

  users: Array<User> = [{
    login: 'user1@gm.com',
    password: 'User@123',
    birthday: moment('2000-10-12')
  },{
  login: 'user2@gm.com',
  password: 'User2@123',
  birthday: moment('2003-10-12')
  },{
    login: 'user2@gm.com',
    password: 'User2@123',
    birthday: moment('2003-03-05')
  }];

  isUserFormDisplayed = false;
  currentUser: User = new User();

  addUser(): void {
    this.isUserFormDisplayed = true;
  }

  saveUser(): void {
    console.log(this.currentUser);
    this.users.push(this.currentUser);

    this.currentUser = new User();
    this.isUserFormDisplayed = false;
  }

  cancel(): void {
    this.isUserFormDisplayed = false;
  }

}

