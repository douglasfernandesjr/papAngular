import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { BlogPostApiModel } from '../../models/blog-post-api-model';

@Component({
  selector: 'app-post-simple-display',
  templateUrl: './post-simple-display.component.html',
  styleUrls: ['./post-simple-display.component.css']
})
export class PostSimpleDisplayComponent implements OnChanges {


  @Input() post: BlogPostApiModel;

  title: string;
  imgUrl: string;
  name: string;

  likeColor: string;

  constructor() { }

  ngOnChanges() {
    if (this.post != null) {
      this.title = this.post.title;
      this.imgUrl = `https://i.pravatar.cc/150?u=${this.post.author}.jpg`;
      this.name = this.post.author;
    }
  }

  like(): void {
    if (!this.likeColor) {
      this.likeColor = 'accent';
    } else {
      this.likeColor = null;
    }
  }

}
