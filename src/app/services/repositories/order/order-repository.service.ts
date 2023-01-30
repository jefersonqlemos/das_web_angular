import { Injectable } from '@angular/core';
import { RequestsService } from '../../requests/requests.service';

@Injectable({
  providedIn: 'root'
})
export class OrderRepositoryService {

  constructor(public requestsService: RequestsService) { }

  store(id: any){
    return this.requestsService.post('order/'+id, {responseType: 'text'})
  }
}
