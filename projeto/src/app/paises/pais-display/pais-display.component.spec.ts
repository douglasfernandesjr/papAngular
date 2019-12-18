import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisDisplayComponent } from './pais-display.component';
import { Pais } from '../pais';

describe('PaisDisplayComponent', () => {
  let component: PaisDisplayComponent;
  let fixture: ComponentFixture<PaisDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaisDisplayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.pais = new Pais('Brasil', 'BR');
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Brasil / BR');
  });
});
