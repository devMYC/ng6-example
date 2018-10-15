import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { _stagger as listStagger } from '../animations/list';
import { DataService } from '../data.service';
import { User } from '../typings';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [ listStagger ],
})
export class UserComponent implements OnInit {

  private id: number;
  private showFields: string[] = [];
  private user: User;

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) {
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit() {
    this.data.getUser(this.id).subscribe(user => {
      this.user = (user as User);
      this.showFields.push('username', 'email', 'phone');
    });
  }

}
