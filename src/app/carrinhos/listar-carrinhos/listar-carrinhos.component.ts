import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICarrinho } from 'src/app/services/interfaces/ICarrinho';
import { IProdutoCarrinho } from 'src/app/services/interfaces/IProdutoCarrinho';
import { CarrinhoRepositoryService } from 'src/app/services/repositories/carrinhos/carrinho-repository.service';
import { DialogVisualizarProdutosComponent } from '../dialog-visualizar-produtos/dialog-visualizar-produtos.component';
import { ProdutosCarrinhoRepositoryService } from 'src/app/services/repositories/produtos-carrinho/produtos-carrinho-repository.service';
import { DialogExcluirCarrinhoComponent } from '../dialog-excluir-carrinho/dialog-excluir-carrinho.component';
import { ProdutosCarrinhoByCarrinhoidService } from 'src/app/services/repositories/produtos-carrinho-by-carrinhoid/produtos-carrinho-by-carrinhoid.service';
import { DialogTransformarPedidoComponent } from '../dialog-transformar-pedido/dialog-transformar-pedido.component';

@Component({
  selector: 'app-listar-carrinhos',
  templateUrl: './listar-carrinhos.component.html',
  styleUrls: ['./listar-carrinhos.component.css']
})
export class ListarCarrinhosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'clienteId', 'valorTotal', 'visualizarProdutos', 'editar', 'excluir', 'enviarPedido'];

  constructor(
    public dialog: MatDialog,
    public repositoryService: CarrinhoRepositoryService,
    public repositoryServiceProdutos: ProdutosCarrinhoRepositoryService,
    public repositoryServiceProdutosCarrinhosByIdCarrinho: ProdutosCarrinhoByCarrinhoidService  
    ) { }

  LISTA_CARRINHOS: ICarrinho[] = this.repositoryService.getAll();

  carrinhos = this.LISTA_CARRINHOS;

  private DIALOG_WIDTH = "50%"

  openDialog(type: any, data?: ICarrinho): void {
    const dialogRef = this.dialog.open(type, {
      width: this.DIALOG_WIDTH,
      data: data
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  openDialogProdutos(type: any, data?: IProdutoCarrinho[]): void {
    const dialogRef = this.dialog.open(type, {
      width: this.DIALOG_WIDTH,
      data: data 
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  visualizarProdutos(carrinho: ICarrinho): void {
    let produtos: any = this.repositoryServiceProdutosCarrinhosByIdCarrinho.getArrayItem(carrinho.id);
    this.openDialogProdutos(DialogVisualizarProdutosComponent, produtos);
  }

  excluirCarrinho(carrinho: ICarrinho): void {
    this.openDialog(DialogExcluirCarrinhoComponent, carrinho);
  }

  transformarPedido(carrinho: ICarrinho): void {
    this.openDialog(DialogTransformarPedidoComponent, carrinho);
  }

  ngOnInit(): void {
  }

}
