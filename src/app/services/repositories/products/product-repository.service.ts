import { Injectable } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';
import { RequestsService } from '../../requests/requests.service';

@Injectable({
  providedIn: 'root',
})
export class ProductRepositoryService{
  constructor(public requestsService: RequestsService) {}

  getAll() {
    return this.requestsService.get('list-products')
  }

  store(product: IProduct){
    return this.requestsService.post('product', product, {responseType: 'text'})
  }

  update(product: IProduct){
    return this.requestsService.put('product', product, {responseType: 'text'})
  }

  delete(id: any){
    return this.requestsService.delete('product/'+id, {responseType: 'text'})
  }
}
