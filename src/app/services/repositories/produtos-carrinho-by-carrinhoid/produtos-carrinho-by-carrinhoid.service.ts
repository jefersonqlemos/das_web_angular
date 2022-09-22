import { Injectable } from '@angular/core';
import { GenericRepository } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutosCarrinhoByCarrinhoidService extends GenericRepository {
  constructor() {
    super();
    this.configure('produtosCarrinho', 'carrinhoId');
  }
}
