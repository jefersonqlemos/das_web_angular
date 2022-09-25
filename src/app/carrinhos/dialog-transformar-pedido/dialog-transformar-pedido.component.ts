import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICarrinho } from 'src/app/services/interfaces/ICarrinho';
import { DialogExcluirCarrinhoComponent } from '../dialog-excluir-carrinho/dialog-excluir-carrinho.component';

@Component({
  selector: 'app-dialog-transformar-pedido',
  templateUrl: './dialog-transformar-pedido.component.html',
  styleUrls: ['./dialog-transformar-pedido.component.css']
})
export class DialogTransformarPedidoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogExcluirCarrinhoComponent>,
    @Inject(MAT_DIALOG_DATA) public carrinho: ICarrinho,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  finalizar(carrinho: ICarrinho): void {

  }

}
