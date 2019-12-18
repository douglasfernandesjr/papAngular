import { TestBed } from '@angular/core/testing';

import { AdminGuardService } from './admin-guard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';

describe('AdminGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule(
    {
      providers: [AuthService],
      imports: [RouterTestingModule]
    }
  ));

  it('should be created', () => {
    const service: AdminGuardService = TestBed.get(AdminGuardService);
    expect(service).toBeTruthy();
  });
});
