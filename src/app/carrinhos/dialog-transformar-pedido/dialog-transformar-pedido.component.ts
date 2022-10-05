import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICarrinho } from 'src/app/services/interfaces/ICarrinho';
import { IPedido } from 'src/app/services/interfaces/IPedido';
import { IProductModel } from 'src/app/services/interfaces/IProduct';
import { IProdutoCarrinho } from 'src/app/services/interfaces/IProdutoCarrinho';
import { CarrinhoRepositoryService } from 'src/app/services/repositories/carrinhos/carrinho-repository.service';
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
    @Inject(MAT_DIALOG_DATA) public carrinho: ICarrinho,
    public pedidoRepositoryService: PedidoRepositoryService,
    public produtosCarrinhoByCarrinhoIdRepositoryService: ProdutosCarrinhoByCarrinhoidService,
    public carrinhoRepositoryService: CarrinhoRepositoryService 
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  finalizar(carrinho: ICarrinho): void {

    const produtosCarrinho = this.produtosCarrinhoByCarrinhoIdRepositoryService.getArrayItem(carrinho.id);

    var produtos: IProductModel[] = [];

    produtosCarrinho.forEach((produtoCarrinho: IProdutoCarrinho) => {
      produtos.push(produtoCarrinho.produto);
    });

    const pedido: IPedido = {
      "id": carrinho.id,
      "cliente": carrinho.cliente, 
      "valorTotal": carrinho.valorTotal,
      "produtos": produtos
    };

    this.pedidoRepositoryService.add(pedido);

    this.carrinhoRepositoryService.remove(carrinho.id);

    window.location.reload();
  }

}
