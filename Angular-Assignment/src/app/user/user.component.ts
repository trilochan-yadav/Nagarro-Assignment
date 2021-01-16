import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './models/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

   users: User[] = [
    {
      name: 'Amar',
      username: '@amar',
      email: 'amar@angular.com',
    },
    {
      name: 'Akhbar',
      username: '@akhbar',
      email: 'akhbar@angular.com',
    },
    {
      name: 'Anthony',
      username: '@anthony',
      email: 'anthony@angular.com',
    },
    {
      name: 'John Doe',
      username: '@johnDoe',
      email: 'john.doe@angular.com',
    },
    {
      name: 'Johnny Depp',
      username: '@johnnyDepp',
      email: 'johnny.depp@angular.com',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteUser(userIndex: number) {
    this.users.splice(userIndex, 1);
  }
}
