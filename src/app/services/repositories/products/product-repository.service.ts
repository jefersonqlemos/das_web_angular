import { Injectable } from '@angular/core';
import { GenericRepository } from '../generic.service';

@Injectable({
  providedIn: 'root',
})
export class ProductRepositoryService extends GenericRepository{
  constructor() {
    super();
    this.configure('products', 'id');
  }
}
