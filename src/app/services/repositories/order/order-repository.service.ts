import { Injectable } from '@angular/core';
import { RequestsService } from '../../requests/requests.service';

@Injectable({
  providedIn: 'root'
})
export class OrderRepositoryService {

  constructor(public requestsService: RequestsService) { }

  getAll() {
    return this.requestsService.get('list-orders')
  }

  store(id: any){
    return this.requestsService.post('order/'+id, {responseType: 'text'})
  }
}
