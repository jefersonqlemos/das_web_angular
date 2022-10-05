import { Injectable } from '@angular/core';
import { GenericRepository } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutosCarrinhoRepositoryService extends GenericRepository {
  constructor() {
    super();
    this.configure('produtosCarrinho', 'id');
  }
}
