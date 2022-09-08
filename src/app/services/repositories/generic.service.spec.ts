import { TestBed } from '@angular/core/testing';

import { GenericRepository } from './generic.Repository';

describe('GenericRepository', () => {
  let Repository: GenericRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    Repository = TestBed.inject(GenericRepository);
  });

  it('should be created', () => {
    expect(Repository).toBeTruthy();
  });
});
