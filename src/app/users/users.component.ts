import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { _stagger as listStagger } from '../animations/list';
import { User } from '../typings';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [ listStagger ],
})
export class UsersComponent implements OnInit {

  private users: User[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(users => this.users = (users as User[]));
  }

}
