import { Injectable } from '@angular/core';
import { Store } from 'src/app/core/models/store';
import { BlogPostApiModel } from '../models/blog-post-api-model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostStoreService extends Store<BlogPostApiModel[]> {

  nextUpdate: Date;

  constructor(private http: HttpClient) {
    super([]);
  }

  public load(): void {

    if (this.nextUpdate == null || this.nextUpdate < new Date()) {

      this.http.get<BlogPostApiModel[]>('http://localhost:3000/posts').subscribe(
        {
          next: (data) => { this.setState(data); },
          error: (err) => { },
          complete: () => {
            this.nextUpdate = new Date();
            this.nextUpdate.setMinutes(this.nextUpdate.getMinutes() + 1);
          }
        }
      );

    }
  }


}
