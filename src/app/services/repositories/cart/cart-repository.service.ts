import { Injectable } from '@angular/core';
import { ICart } from '../../interfaces/ICart';
import { RequestsService } from '../../requests/requests.service';

@Injectable({
  providedIn: 'root'
})
export class CartRepositoryService {

  constructor(public requestsService: RequestsService) { }

  getAll() {
    return this.requestsService.get('list-carts')
  }

  store(cart: ICart){
    return this.requestsService.post('cart', cart, {responseType: 'text'})
  }

  update(cart: ICart){
    return this.requestsService.put('cart', cart, {responseType: 'text'})
  }

  delete(id: any){
    return this.requestsService.delete('cart/'+id, {responseType: 'text'})
  }
}
