import { TestBed } from '@angular/core/testing';

import { PostStoreService } from './post-store.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PostStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [PostStoreService],
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: PostStoreService = TestBed.get(PostStoreService);
    expect(service).toBeTruthy();
  });
});
