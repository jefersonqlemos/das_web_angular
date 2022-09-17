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
}
