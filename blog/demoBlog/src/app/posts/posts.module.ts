import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostSimpleDisplayComponent } from './components/post-simple-display/post-simple-display.component';
import { PostFullDisplayComponent } from './components/post-full-display/post-full-display.component';
import { PostsHomePageComponent } from './pages/posts-home-page/posts-home-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostStoreService } from './services/post-store.service';
import {MatCardModule} from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PostSimpleDisplayComponent,
    PostFullDisplayComponent,
    PostsHomePageComponent,
    PostPageComponent],
  exports: [
    PostsHomePageComponent,
    PostPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PostsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [PostStoreService]
})
export class PostsModule { }
