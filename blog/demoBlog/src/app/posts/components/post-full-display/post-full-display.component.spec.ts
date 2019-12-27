import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFullDisplayComponent } from './post-full-display.component';

describe('PostFullDisplayComponent', () => {
  let component: PostFullDisplayComponent;
  let fixture: ComponentFixture<PostFullDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFullDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFullDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
