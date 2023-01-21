import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { IClient } from 'src/app/services/interfaces/IClient';
import { IClienteModel } from 'src/app/services/interfaces/ICliente';
import { ClientRepositoryService } from 'src/app/services/repositories/client/client-repository.service';

@Component({
  selector: 'app-dialog-buscar-cliente',
  templateUrl: './dialog-buscar-cliente.component.html',
  styleUrls: ['./dialog-buscar-cliente.component.css']
})
export class DialogBuscarClienteComponent implements OnInit {

  myControl = new FormControl('');
  filteredClientes?: Observable<IClienteModel[]>;

  constructor(
    public dialogRef: MatDialogRef<DialogBuscarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public cliente: IClienteModel,
    public clientRepositoryService: ClientRepositoryService
  ) { }

  //clients: IClient[] = this.clientRepositoryService.getAll();

  ngOnInit(): void {
    /*this.filteredClientes = this.myControl.valueChanges.pipe(
      startWith(''),
      map(nome => this._filter(nome || ''))
    );*/
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private _filter(nome: string){//: IClient[] {
    const filterValue = nome.toLowerCase();

    //return this.clients.filter(client => client.nome.toLowerCase().includes(filterValue));
  }

  clienteSelecionado(cliente: any){
    console.log(cliente.option);
    this.dialogRef.close({ clienteId: cliente.option.id, clienteNome: cliente.option.value })
  }

}
