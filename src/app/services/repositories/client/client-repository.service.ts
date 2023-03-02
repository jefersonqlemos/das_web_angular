import { Injectable } from '@angular/core';
import { IClient } from '../../interfaces/IClient';
import { RequestsService } from '../../requests/requests.service';

@Injectable({
  providedIn: 'root'
})
export class ClientRepositoryService {

  constructor(public requestsService: RequestsService) { }

  getAll() {
    return this.requestsService.get('list-clients')
  }

  store(client: IClient){
    return this.requestsService.post('client', client, {responseType: 'text'})
  }

  update(client: IClient){
    return this.requestsService.put('client', client, {responseType: 'text'})
  }

  delete(id: any){
    return this.requestsService.delete('client/'+id, {responseType: 'text'})
  }
}
