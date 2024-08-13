import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  name: string = '';
  email: string = '';
  bio: string = '';
  counter: number = 0;

  reset() {
    this.name = '';
    this.email = '';
    this.bio = '';
  }

  save() {
    console.log(
      'Profile is saved! ' +
        'name:' +
        this.name +
        ', email:' +
        this.email +
        ', bio:' +
        this.bio
    );
    this.counter++;
  }

  canNotReset(): boolean {
    return !this.name && !this.email && !this.bio;
  }
}
