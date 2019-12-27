import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSimpleDisplayComponent } from './post-simple-display.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('PostSimpleDisplayComponent', () => {
  let component: PostSimpleDisplayComponent;
  let fixture: ComponentFixture<PostSimpleDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSimpleDisplayComponent ],
      imports: [MatCardModule, MatIconModule, MatButtonModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSimpleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
