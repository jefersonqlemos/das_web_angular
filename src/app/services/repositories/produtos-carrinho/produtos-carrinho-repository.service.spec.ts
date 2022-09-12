import { TestBed } from '@angular/core/testing';

import { ProdutosCarrinhoRepositoryService } from './produtos-carrinho-repository.service';

describe('ProdutosCarrinhoRepositoryService', () => {
  let service: ProdutosCarrinhoRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosCarrinhoRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
