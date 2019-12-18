import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDriveComponent } from './model-drive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModelDriveComponent', () => {
  let component: ModelDriveComponent;
  let fixture: ComponentFixture<ModelDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelDriveComponent ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
