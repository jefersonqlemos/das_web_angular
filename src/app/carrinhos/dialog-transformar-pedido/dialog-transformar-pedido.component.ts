import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICarrinho } from 'src/app/services/interfaces/ICarrinho';
import { ICart } from 'src/app/services/interfaces/ICart';
import { IPedido } from 'src/app/services/interfaces/IPedido';
import { IProduct } from 'src/app/services/interfaces/IProduct';
import { IProdutoCarrinho } from 'src/app/services/interfaces/IProdutoCarrinho';
import { IProdutoPedido } from 'src/app/services/interfaces/IProdutoPedido';
import { CarrinhoRepositoryService } from 'src/app/services/repositories/carrinhos/carrinho-repository.service';
import { OrderRepositoryService } from 'src/app/services/repositories/order/order-repository.service';
import { PedidoRepositoryService } from 'src/app/services/repositories/pedidos/pedido-repository.service';
import { ProdutosCarrinhoByCarrinhoidService } from 'src/app/services/repositories/produtos-carrinho-by-carrinhoid/produtos-carrinho-by-carrinhoid.service';
import { DialogExcluirCarrinhoComponent } from '../dialog-excluir-carrinho/dialog-excluir-carrinho.component';

@Component({
  selector: 'app-dialog-transformar-pedido',
  templateUrl: './dialog-transformar-pedido.component.html',
  styleUrls: ['./dialog-transformar-pedido.component.css']
})
export class DialogTransformarPedidoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogExcluirCarrinhoComponent>,
    @Inject(MAT_DIALOG_DATA) public carrinho: ICart,
    public orderRepositoryService: OrderRepositoryService,
    private _snackBar: MatSnackBar,

  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  finalizar(cart: ICart): void {

    //console.log(cart);

    this.orderRepositoryService.store(cart.id).subscribe(data=>
      this.response(data)
    );

    window.location.reload();

    /*const produtosCarrinho = this.produtosCarrinhoByCarrinhoIdRepositoryService.getArrayItem(carrinho.id);

    var produtos: IProdutoPedido[] = [];

    produtosCarrinho.forEach((produtoCarrinho: IProdutoCarrinho) => {
      const produto_pedido: IProdutoPedido = {
        "id": produtoCarrinho.id,
        "quantidade": produtoCarrinho.quantidade,
        "produto": produtoCarrinho.produto
      };

      produtos.push(produto_pedido);
    });

    const pedido: IPedido = {
      "id": carrinho.id,
      "cliente": carrinho.cliente, 
      "valorTotal": carrinho.valorTotal,
      "produtos": produtos
    };

    this.pedidoRepositoryService.add(pedido);

    this.carrinhoRepositoryService.remove(carrinho.id);*/

  }

  async response(data: any): Promise<void>{
    if(data=="OK"){
      this._snackBar.open("Pedido criado com sucesso", "sair", { duration: 3000 });
      this.dialogRef.close();
    }else{
      this._snackBar.open("algo deu errado", "sair", { duration: 3000 });
    }
  }

}
