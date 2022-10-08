import { Injectable } from '@angular/core';
import { GenericRepository } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteRepositoryService extends GenericRepository{
  constructor() { 
    super();
    this.configure('clientes', 'id');
  }

  override getAll(): any[] {
    var clientList = super.getAll();

    clientList.forEach(c => c.fullName = `${c.nome} ${c.sobrenome}`);

    return clientList;
  }
}
