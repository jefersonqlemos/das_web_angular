import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ICarrinho } from 'src/app/services/interfaces/ICarrinho';
import { IClienteModel } from 'src/app/services/interfaces/ICliente';
import { IProduct } from 'src/app/services/interfaces/IProduct';
import { IProdutoCarrinho } from 'src/app/services/interfaces/IProdutoCarrinho';
import { CarrinhoRepositoryService } from 'src/app/services/repositories/carrinhos/carrinho-repository.service';
import { ProductRepositoryService } from 'src/app/services/repositories/products/product-repository.service';
import { ProdutosCarrinhoRepositoryService } from 'src/app/services/repositories/produtos-carrinho/produtos-carrinho-repository.service';
import { DialogBuscarClienteComponent } from '../dialog-buscar-cliente/dialog-buscar-cliente.component';
import { DialogBuscarProdutoComponent } from '../dialog-buscar-produto/dialog-buscar-produto.component';
import { ProdutosCarrinhoByCarrinhoidService } from 'src/app/services/repositories/produtos-carrinho-by-carrinhoid/produtos-carrinho-by-carrinhoid.service';
import { ClientRepositoryService } from 'src/app/services/repositories/client/client-repository.service';

@Component({
  selector: 'app-editar-carrinho',
  templateUrl: './editar-carrinho.component.html',
  styleUrls: ['./editar-carrinho.component.css']
})
export class EditarCarrinhoComponent implements OnInit {

  displayedColumns: string[] = [ 'produtoId', 'quantidade', 'valor', 'remover'];

  produtos: IProdutoCarrinho[] = [];
  produtosExclusao: IProdutoCarrinho[] = [];
  carrinho: ICarrinho = {
    id: 0,
    valorTotal: 0,
    cliente: {
      id: 0,
      nome: '',
      sobrenome: '',
      cpf: '',
      fullName: ''
    }
  };

  nome: string = '';
  id: number = 0;

  constructor(
    public clientRepositoryService: ClientRepositoryService,
    public repositoryServiceProduct: ProductRepositoryService,
    public repositoryServiceCarrinho: CarrinhoRepositoryService,
    public repositoryServiceProdutoCarrinho: ProdutosCarrinhoRepositoryService,
    public repositoryServiceProdutoCarrinhoByCarrinhoId: ProdutosCarrinhoByCarrinhoidService,  
    public dialog: MatDialog,
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    let carrinhoId = this.route.snapshot.params['carrinhoId'];
    this.carrinho = this.repositoryServiceCarrinho.getItem(carrinhoId);
    this.produtos = this.repositoryServiceProdutoCarrinhoByCarrinhoId.getArrayItem(carrinhoId);
    this.produtosExclusao = this.repositoryServiceProdutoCarrinhoByCarrinhoId.getArrayItem(carrinhoId);
    this.nome = this.carrinho.cliente.nome;
    this.id = this.carrinho.cliente.id;
  }

  private DIALOG_WIDTH = "50%"

  adicionarProduto(){
    let produtos: any = this.repositoryServiceProduct.getAll();
    this.openDialogProdutos(DialogBuscarProdutoComponent, produtos)
  }

  adicionarCliente(){
    //let clientes: any = this.repositoryService.getAll();
    //this.openDialogClientes(DialogBuscarClienteComponent, clientes)
  }

  removerProduto(produto: IProdutoCarrinho){
    console.log(produto.produto.id);
    this.produtos = this.produtos.filter((u) => u.produto.id !== produto.produto.id);
  }

  salvarCarrinho(){
   /* var id = (<HTMLInputElement>document.getElementById('nome')).name;
    let cliente = this.repositoryService.getItem(id);

    var valorTotal = 0;
    this.produtos.forEach((value) => {
        valorTotal = valorTotal + value.produto.value*value.quantidade;
        value.carrinhoId = this.carrinho.id;
        this.repositoryServiceProdutoCarrinho.add(value);
    });

    this.produtosExclusao.forEach((value) => {
      this.repositoryServiceProdutoCarrinho.remove(value.id);
    });

    const carrinho: ICarrinho = {
        "id": this.carrinho.id,
        "cliente": cliente, 
        "valorTotal": valorTotal
    }; 
    
    this.repositoryServiceCarrinho.update(carrinho);

    console.log(this.produtos);

    window.location.href = 'listar-carrinhos';*/
  }

  openDialogClientes(type: any, data?: IClienteModel[]): void {
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
      /*const produto = this.repositoryServiceProduct.getItem(result.produtoId);
      const produtoCarrinho: IProdutoCarrinho = {
        "id": 0,
        "produto": produto,
        "carrinhoId": 0,
        "quantidade": result.quantidade
      };
      console.log(produto);
      //this.produtos.push(produtoCarrinho);
      this.produtos = [...this.produtos, produtoCarrinho];*/
    });
  }

}
