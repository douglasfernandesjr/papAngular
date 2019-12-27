import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsHomePageComponent } from './posts-home-page.component';
import { PostStoreService } from '../../services/post-store.service';
import { HttpClientModule } from '@angular/common/http';
import { PostSimpleDisplayComponent } from '../../components/post-simple-display/post-simple-display.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('PostsHomePageComponent', () => {
  let component: PostsHomePageComponent;
  let fixture: ComponentFixture<PostsHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsHomePageComponent, PostSimpleDisplayComponent],
      providers: [PostStoreService],
      imports: [HttpClientModule, MatCardModule, MatButtonModule, MatIconModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
