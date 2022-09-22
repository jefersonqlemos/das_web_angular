import { TestBed } from '@angular/core/testing';

import { ProdutosCarrinhoByCarrinhoidService } from './produtos-carrinho-by-carrinhoid.service';

describe('ProdutosCarrinhoByCarrinhoidService', () => {
  let service: ProdutosCarrinhoByCarrinhoidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosCarrinhoByCarrinhoidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
