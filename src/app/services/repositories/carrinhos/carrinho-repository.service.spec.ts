import { TestBed } from '@angular/core/testing';

import { CarrinhoRepositoryService } from './carrinho-repository.service';

describe('CarrinhoRepositoryService', () => {
  let service: CarrinhoRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrinhoRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
