import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IOrder } from 'src/app/services/interfaces/IOrder';
import { IPedido } from 'src/app/services/interfaces/IPedido';
import { IProduct } from 'src/app/services/interfaces/IProduct';
import { IProdutoPedido } from 'src/app/services/interfaces/IProdutoPedido';
import { OrderRepositoryService } from 'src/app/services/repositories/order/order-repository.service';
import { PedidoRepositoryService } from 'src/app/services/repositories/pedidos/pedido-repository.service';
import { DialogVisualizarProdutosPedidosComponent } from '../dialog-visualizar-produtos-pedidos/dialog-visualizar-produtos-pedidos.component';

@Component({
  selector: 'app-listar-pedidos',
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css']
})
export class ListarPedidosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'clienteId', 'valorTotal', 'visualizarProdutos'];

  orders: IOrder[] = [];

  constructor(
    public dialog: MatDialog,
    public orderRepositoryService: OrderRepositoryService,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

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

  getAll(){
    this.orderRepositoryService.getAll().subscribe(data => 
      (this.orders = JSON.parse(JSON.stringify(data))) 
      (this.changeDetectorRefs.detectChanges()));
  }

  ngOnInit(): void {
    this.getAll();
  }

}
