import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IClienteModel } from 'src/app/services/interfaces/ICliente';
import { ClienteRepositoryService } from 'src/app/services/repositories/clientes/cliente-repository.service';
import { EditarClienteComponent } from '../editar-cliente/editar-cliente.component';
import { ExcluirClienteComponent } from '../excluir-cliente/excluir-cliente.component';
import { InserirClienteComponent } from '../inserir-cliente/inserir-cliente.component';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css'],
})
export class ListarClienteComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'cpf', 'editar', 'excluir'];

  constructor(
    public dialog: MatDialog,
    public repositoryService: ClienteRepositoryService
  ) {}

  LISTA: IClienteModel[] = this.repositoryService.getAll();

  clientes = this.LISTA;

  private DIALOG_WIDTH = "50%"

  openDialog(type: any, data?: IClienteModel): void {
    const dialogRef = this.dialog.open(type, {
      width: this.DIALOG_WIDTH,
      data: data,
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  cadastrarCliente(): void {
    this.openDialog(InserirClienteComponent);
  }

  editarCliente(cliente: IClienteModel): void {
    this.openDialog(EditarClienteComponent, cliente);
  }

  excluirCliente(cliente: IClienteModel): void {
    this.openDialog(ExcluirClienteComponent, cliente);
  }

  ngOnInit(): void {}
}
