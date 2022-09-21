import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICarrinho } from 'src/app/services/interfaces/ICarrinho';
import { ICliente } from 'src/app/services/interfaces/ICliente';
import { IProductModel } from 'src/app/services/interfaces/IProduct';
import { IProdutoCarrinho } from 'src/app/services/interfaces/IProdutoCarrinho';
import { ClienteRepositoryService } from 'src/app/services/repositories/clientes/cliente-repository.service';
import { ProductRepositoryService } from 'src/app/services/repositories/products/product-repository.service';
import { DialogBuscarClienteComponent } from '../dialog-buscar-cliente/dialog-buscar-cliente.component';
import { DialogBuscarProdutoComponent } from '../dialog-buscar-produto/dialog-buscar-produto.component';

@Component({
  selector: 'app-criar-carrinho',
  templateUrl: './criar-carrinho.component.html',
  styleUrls: ['./criar-carrinho.component.css']
})
export class CriarCarrinhoComponent implements OnInit {

  displayedColumns: string[] = [ 'produtoId', 'quantidade', 'valor', 'remover'];

  produtos: IProdutoCarrinho[] = [];

  nome: string = '';
  id: string = '';

  constructor(public repositoryService: ClienteRepositoryService,
    public repositoryServiceProduct: ProductRepositoryService,
    public dialog: MatDialog) { 
    }

  private DIALOG_WIDTH = "50%"

  ngOnInit(): void { }

  adicionarProduto(){
    let produtos: any = this.repositoryServiceProduct.getAll();
    this.openDialogProdutos(DialogBuscarProdutoComponent, produtos)
  }

  adicionarCliente(){
    let clientes: any = this.repositoryService.getAll();
    this.openDialogClientes(DialogBuscarClienteComponent, clientes)
  }

  removerProduto(produto: IProdutoCarrinho){
    console.log(produto.produto.id);
    this.produtos = this.produtos.filter((u) => u.produto.id !== produto.produto.id);
  }

  salvarCarrinho(){

  }

  openDialogClientes(type: any, data?: ICliente[]): void {
    const dialogRef = this.dialog.open(type, {
      width: this.DIALOG_WIDTH,
      data: data 
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.nome = result.clienteNome;
      this.id = result.clienteId;
      console.log('The dialog was closed');
    });
  }

  openDialogProdutos(type: any, data?: IProductModel[]): void {
    const dialogRef = this.dialog.open(type, {
      width: this.DIALOG_WIDTH,
      data: data 
    });

    dialogRef.afterClosed().subscribe((result) => {
      const produto = this.repositoryServiceProduct.getItem(result.produtoId);
      const produtoCarrinho: IProdutoCarrinho = {
        "id": 0,
        "produto": produto,
        "carrinhoId": 0,
        "quantidade": result.quantidade
      };
      console.log(produto);
      //this.produtos.push(produtoCarrinho);
      this.produtos = [...this.produtos, produtoCarrinho];
    });
  }

}
