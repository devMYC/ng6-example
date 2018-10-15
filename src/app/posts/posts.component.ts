import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { _stagger as listStagger } from '../animations/list';
import { Post } from '../typings';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [ listStagger ],
})
export class PostsComponent implements OnInit {

  private posts: Post[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(posts => this.posts = posts);
  }

}
