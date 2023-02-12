import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICarrinho } from 'src/app/services/interfaces/ICarrinho';
import { ICartProduct } from 'src/app/services/interfaces/ICartProduct';
import { IClient } from 'src/app/services/interfaces/IClient';
import { ICart } from 'src/app/services/interfaces/ICart';
import { IClienteModel } from 'src/app/services/interfaces/ICliente';
import { IProduct } from 'src/app/services/interfaces/IProduct';
import { IProdutoCarrinho } from 'src/app/services/interfaces/IProdutoCarrinho';
import { CarrinhoRepositoryService } from 'src/app/services/repositories/carrinhos/carrinho-repository.service';
import { CartProductRepositoryService } from 'src/app/services/repositories/cart-product/cart-product-repository.service';
import { CartRepositoryService } from 'src/app/services/repositories/cart/cart-repository.service';
import { ClientRepositoryService } from 'src/app/services/repositories/client/client-repository.service';
import { ProductRepositoryService } from 'src/app/services/repositories/products/product-repository.service';
import { ProdutosCarrinhoRepositoryService } from 'src/app/services/repositories/produtos-carrinho/produtos-carrinho-repository.service';
import { DialogBuscarClienteComponent } from '../dialog-buscar-cliente/dialog-buscar-cliente.component';
import { DialogBuscarProdutoComponent } from '../dialog-buscar-produto/dialog-buscar-produto.component';

@Component({
  selector: 'app-criar-carrinho',
  templateUrl: './criar-carrinho.component.html',
  styleUrls: ['./criar-carrinho.component.css']
})
export class CriarCarrinhoComponent implements OnInit {

  displayedColumns: string[] = [ 'produtoId', 'quantidade', 'valor', 'remover'];

  produtos: ICartProduct[] = [];

  nome: string = '';
  id: string = '';

  public cart: ICart = {
    id: 0,
    clientId: 0,
    totalValue: 0
  };

  constructor(public clientRepositoryService: ClientRepositoryService,
    public repositoryServiceProduct: ProductRepositoryService,
    public cartRepositoryService: CartRepositoryService,
    public cartProductRepositoryService: CartProductRepositoryService,
    public dialog: MatDialog) { 
    }

  private DIALOG_WIDTH = "50%"

  ngOnInit(): void { }

  adicionarProduto(){
    this.openDialogProdutos(DialogBuscarProdutoComponent)
  }

  adicionarCliente(){
    this.openDialogClientes(DialogBuscarClienteComponent)
  }

  removerProduto(produto: ICartProduct){
    console.log(produto.id);
    this.produtos = this.produtos.filter((u) => u.id !== produto.id);
  }

  async salvarCarrinho(){

    this.cart.clientId = parseInt(this.id);

    var valorTotal = 0;
    this.produtos.forEach(function (value) {
        valorTotal = valorTotal + value.product.value*value.quantity;
    });

    this.cart.totalValue = valorTotal;

    /*const carrinho: ICarrinho = {
        "id": 0,
        "cliente": cliente, 
        "valorTotal": valorTotal
    };*/ 
    
    await this.cartRepositoryService.store(this.cart).subscribe((data)=>
      (this.cart = JSON.parse(JSON.stringify(data)))
    );
  
    this.produtos.forEach((value) => {
      value.cartId = this.cart.id;
      this.cartProductRepositoryService.store(value);
    });

    console.log(this.produtos);

    window.location.href = 'listar-carrinhos';
  }

  openDialogClientes(type: any, data?: IClient[]): void {
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

  openDialogProdutos(type: any, data?: IProduct[]): void {
    const dialogRef = this.dialog.open(type, {
      width: this.DIALOG_WIDTH,
      data: data 
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.repositoryServiceProduct.get(result.productId).subscribe( data =>
        this.addTableCartProduct(JSON.parse(JSON.stringify(data)), result)
      );
      //this.repositoryServiceProduct.getItem(result.produtoId);
    });
  }

  addTableCartProduct(product: any, result: any){
    console.log(product);
      const cartProduct: ICartProduct = {
        "id": 0,
        "productId": result.productId,
        "cartId": 0,
        "quantity": result.quantity,
        "value": result.value,
        "product": product,
      };
      this.produtos = [...this.produtos, cartProduct];
  }

}
