import { TestBed } from '@angular/core/testing';

import { PedidoRepositoryService } from './pedido-repository.service';

describe('PedidoRepositoryService', () => {
  let service: PedidoRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
