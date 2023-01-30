import { TestBed } from '@angular/core/testing';

import { OrderProductRepositoryService } from './order-product-repository.service';

describe('OrderProductRepositoryService', () => {
  let service: OrderProductRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderProductRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
