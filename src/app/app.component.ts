import { Component } from '@angular/core';
import * as moment from 'moment';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  

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
  title = 'user-manager';
  isPasswordDisplayed = false;
  isConfirmPasswordDisplayed = false;

  currentUserConfirmPassword = '';

  addUser(): void {
    this.isUserFormDisplayed = true;
  }

  saveUser(): void {
    console.log(this.currentUser);
    if(this.currentUserConfirmPassword !== this.currentUser.password) {
      alert('Le mot de passe saisie ne correspond pas à la confirmation !!');
      return;
    }
    this.users.push(this.currentUser);

    this.currentUser = new User();
    this.isUserFormDisplayed = false;
  }

  cancel(): void {
    this.isUserFormDisplayed = false;
  }

  

  toggleDisplayPassword(): void {
    // if(!this.isPasswordDisplayed) {
    //   this.isPasswordDisplayed = true;
    // } else {
    //   this.isPasswordDisplayed = false;
    // }

    this.isPasswordDisplayed = !this.isPasswordDisplayed;
  }

  toggleDisplayConfirmPassword(): void {
    this.isConfirmPasswordDisplayed = !this.isConfirmPasswordDisplayed;
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
  }

  editUser(index: number, user: User): void {
    //TODO: à implémenter par Rihab
  }


}

