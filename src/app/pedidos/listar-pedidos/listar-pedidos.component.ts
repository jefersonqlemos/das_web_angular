import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IPedido } from 'src/app/services/interfaces/IPedido';
import { IProduct } from 'src/app/services/interfaces/IProduct';
import { IProdutoPedido } from 'src/app/services/interfaces/IProdutoPedido';
import { PedidoRepositoryService } from 'src/app/services/repositories/pedidos/pedido-repository.service';
import { DialogVisualizarProdutosPedidosComponent } from '../dialog-visualizar-produtos-pedidos/dialog-visualizar-produtos-pedidos.component';

@Component({
  selector: 'app-listar-pedidos',
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css']
})
export class ListarPedidosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'clienteId', 'valorTotal', 'visualizarProdutos'];

  constructor(
    public dialog: MatDialog,
    public repositoryService: PedidoRepositoryService
  ) { }

  LISTA_PEDIDOS: IPedido[] = this.repositoryService.getAll();

  pedidos = this.LISTA_PEDIDOS;

  private DIALOG_WIDTH = "50%"

  openDialogProdutos(type: any, data?: IProdutoPedido[]): void {
    const dialogRef = this.dialog.open(type, {
      width: this.DIALOG_WIDTH,
      data: data 
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  visualizarProdutos(pedido: IPedido): void {
    this.openDialogProdutos(DialogVisualizarProdutosPedidosComponent, pedido.produtos);
  }

  ngOnInit(): void {
  }

}
