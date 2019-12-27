import { Component, OnInit } from '@angular/core';
import { PostStoreService } from '../../services/post-store.service';

@Component({
  selector: 'app-posts-home-page',
  templateUrl: './posts-home-page.component.html',
  styleUrls: ['./posts-home-page.component.css']
})
export class PostsHomePageComponent implements OnInit {

  constructor(public store: PostStoreService) { }

  ngOnInit() {
    this.store.load();
  }

}
