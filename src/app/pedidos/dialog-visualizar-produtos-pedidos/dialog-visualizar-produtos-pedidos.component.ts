import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProdutoPedido } from 'src/app/services/interfaces/IProdutoPedido';

@Component({
  selector: 'app-dialog-visualizar-produtos-pedidos',
  templateUrl: './dialog-visualizar-produtos-pedidos.component.html',
  styleUrls: ['./dialog-visualizar-produtos-pedidos.component.css']
})
export class DialogVisualizarProdutosPedidosComponent implements OnInit {

  displayedColumns: string[] = [ 'produtoId', 'quantidade', 'valor'];

  constructor(
    public dialogRef: MatDialogRef<DialogVisualizarProdutosPedidosComponent>,
    @Inject(MAT_DIALOG_DATA) public produtos: IProdutoPedido[]
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
