import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICarrinho } from 'src/app/services/interfaces/ICarrinho';
import { IProdutoCarrinho } from 'src/app/services/interfaces/IProdutoCarrinho';
import { CarrinhoRepositoryService } from 'src/app/services/repositories/carrinhos/carrinho-repository.service';
import { DialogRemoverCarrinhoComponent } from '../dialog-remover-carrinho/dialog-remover-carrinho.component';
import { DialogVisualizarProdutosComponent } from '../dialog-visualizar-produtos/dialog-visualizar-produtos.component';
import { ProdutosCarrinhoRepositoryService } from 'src/app/services/repositories/produtos-carrinho/produtos-carrinho-repository.service';

@Component({
  selector: 'app-listar-carrinhos',
  templateUrl: './listar-carrinhos.component.html',
  styleUrls: ['./listar-carrinhos.component.css']
})
export class ListarCarrinhosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'clienteId', 'valorTotal', 'visualizarProdutos', 'editar', 'excluir'];

  constructor(
    public dialog: MatDialog,
    public repositoryService: CarrinhoRepositoryService,
    public repositoryServiceProdutos: ProdutosCarrinhoRepositoryService 
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

  editarCarrinho(carrinho: ICarrinho): void {
    
  }

  visualizarProdutos(carrinho: ICarrinho): void {
    let produtos: any = this.repositoryServiceProdutos.getAll();
    this.openDialogProdutos(DialogVisualizarProdutosComponent, produtos);
  }

  removerCarrinho(carrinho: ICarrinho): void {
    this.openDialog(DialogRemoverCarrinhoComponent, carrinho);
  }

  ngOnInit(): void {
  }

}