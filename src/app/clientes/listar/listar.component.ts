import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IClienteModel } from 'src/app/services/interfaces/ICliente';
import { ClienteRepositoryService } from 'src/app/services/repositories/clientes/cliente-repository.service';
import { EditarClienteComponent } from '../editar/editar.component';
import { ExcluirClienteComponent } from '../excluir/excluir.component';
import { InserirClienteComponent } from '../inserir/inserir-cliente.component';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarClientesComponent implements OnInit {
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
