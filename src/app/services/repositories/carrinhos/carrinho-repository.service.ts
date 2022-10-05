import { Injectable } from '@angular/core';
import { GenericRepository } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoRepositoryService extends GenericRepository{
  constructor() {
    super();
    this.configure('carrinhos', 'id');
   }
}
