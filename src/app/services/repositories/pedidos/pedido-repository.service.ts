import { Injectable } from '@angular/core';
import { GenericRepository } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoRepositoryService extends GenericRepository{
  constructor() {
    super();
    this.configure('pedidos', 'id');
   }
}
