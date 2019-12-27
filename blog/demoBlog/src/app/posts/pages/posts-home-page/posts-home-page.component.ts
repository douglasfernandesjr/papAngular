import { Component, OnInit } from '@angular/core';
import { PostStoreService } from '../../services/post-store.service';
import { Subscription } from 'rxjs';
import { BlogPostApiModel } from '../../models/blog-post-api-model';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-posts-home-page',
  templateUrl: './posts-home-page.component.html',
  styleUrls: ['./posts-home-page.component.css']
})
export class PostsHomePageComponent implements OnInit {


  storeSubs: Subscription;
  list: BlogPostApiModel[];
  loading = true;

  constructor(public store: PostStoreService) {

    this.storeSubs = store.state$.subscribe(data => {
      this.list = data;
      if (data.length > 0) {
        this.loading = false;
      }
    });

  }

  ngOnInit() {
    this.store.load();
  }

}
