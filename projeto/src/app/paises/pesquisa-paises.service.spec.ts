import { TestBed } from '@angular/core/testing';

import { PesquisaPaisesService } from './pesquisa-paises.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PesquisaPaisesService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [HttpClientTestingModule]}));

  it('should be created', () => {
    const service: PesquisaPaisesService = TestBed.get(PesquisaPaisesService);
    expect(service).toBeTruthy();
  });
});
