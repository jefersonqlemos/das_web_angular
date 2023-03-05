import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICarrinho } from 'src/app/services/interfaces/ICarrinho';
import { IProdutoCarrinho } from 'src/app/services/interfaces/IProdutoCarrinho';
import { CarrinhoRepositoryService } from 'src/app/services/repositories/carrinhos/carrinho-repository.service';
import { DialogVisualizarProdutosComponent } from '../dialog-visualizar-produtos/dialog-visualizar-produtos.component';
import { ProdutosCarrinhoRepositoryService } from 'src/app/services/repositories/produtos-carrinho/produtos-carrinho-repository.service';
import { DialogExcluirCarrinhoComponent } from '../dialog-excluir-carrinho/dialog-excluir-carrinho.component';
import { ProdutosCarrinhoByCarrinhoidService } from 'src/app/services/repositories/produtos-carrinho-by-carrinhoid/produtos-carrinho-by-carrinhoid.service';
import { DialogTransformarPedidoComponent } from '../dialog-transformar-pedido/dialog-transformar-pedido.component';
import { ICart } from 'src/app/services/interfaces/ICart';
import { CartRepositoryService } from 'src/app/services/repositories/cart/cart-repository.service';

@Component({
  selector: 'app-listar-carrinhos',
  templateUrl: './listar-carrinhos.component.html',
  styleUrls: ['./listar-carrinhos.component.css']
})
export class ListarCarrinhosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'clienteId', 'valorTotal', 'visualizarProdutos', 'excluir', 'enviarPedido']; //'editar', 

  constructor(
    public dialog: MatDialog,
    public cartRepositoryService: CartRepositoryService,
    public repositoryServiceProdutos: ProdutosCarrinhoRepositoryService,
    public repositoryServiceProdutosCarrinhosByIdCarrinho: ProdutosCarrinhoByCarrinhoidService,
    public changeDetectorRefs: ChangeDetectorRef
    ) { }

  carts: ICart[] = [];

  private DIALOG_WIDTH = "50%"

  openDialog(type: any, data?: ICart): void {
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

  visualizarProdutos(carrinho: ICart): void {
    let produtos: any = this.repositoryServiceProdutosCarrinhosByIdCarrinho.getArrayItem(carrinho.id);
    this.openDialogProdutos(DialogVisualizarProdutosComponent, produtos);
  }

  excluirCarrinho(carrinho: ICart): void {
    this.openDialog(DialogExcluirCarrinhoComponent, carrinho);
  }

  transformarPedido(carrinho: ICart): void {
    this.openDialog(DialogTransformarPedidoComponent, carrinho);
  }

  getAll(){
    this.cartRepositoryService.getAll().subscribe(data => 
      (this.carts = JSON.parse(JSON.stringify(data))) 
      (this.changeDetectorRefs.detectChanges()));
  }

  ngOnInit(): void {
    this.getAll();
  }

}
