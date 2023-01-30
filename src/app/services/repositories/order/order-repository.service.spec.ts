import { TestBed } from '@angular/core/testing';

import { OrderRepositoryService } from './order-repository.service';

describe('OrderRepositoryService', () => {
  let service: OrderRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
