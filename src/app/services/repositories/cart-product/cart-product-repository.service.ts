import { Injectable } from '@angular/core';
import { ICartProduct } from '../../interfaces/ICartProduct';
import { RequestsService } from '../../requests/requests.service';

@Injectable({
  providedIn: 'root'
})
export class CartProductRepositoryService {

  constructor(public requestsService: RequestsService) { }

  getAll(id: any) {
    return this.requestsService.get('cart-product/'+id)
  }

  store(cartProduct: ICartProduct){
    return this.requestsService.post('cart-product', cartProduct, {responseType: 'text'})
  }

  delete(id: any){
    return this.requestsService.delete('cart-product/'+id, {responseType: 'text'})
  }

}
