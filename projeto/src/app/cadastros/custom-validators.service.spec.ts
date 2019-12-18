import { TestBed } from '@angular/core/testing';

import { CustomValidatorsService } from './custom-validators.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CustomValidatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports:[HttpClientTestingModule]}));

  it('should be created', () => {
    const service: CustomValidatorsService = TestBed.get(CustomValidatorsService);
    expect(service).toBeTruthy();
  });
});
