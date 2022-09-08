import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductRepositoryService } from 'src/app/services/repositories/products/product-repository.service';
import { DialogCadastrarProdutoComponent } from '../dialog-cadastrar-produto/dialog-cadastrar-produto.component';
import { DialogEditarProdutoComponent } from '../dialog-editar-produto/dialog-editar-produto.component';
import { DialogExcluirProdutoComponent } from '../dialog-excluir-produto/dialog-excluir-produto.component';

export interface Produtos {
  id: number;
  nome: string;
  valor: number;
}

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'valor', 'editar', 'excluir'];

  constructor(
    public dialog: MatDialog,
    public repositoryService: ProductRepositoryService) { }
  
  LISTA_PRODUTOS: Produtos[] = this.repositoryService.getAll();
  
  produtos = this.LISTA_PRODUTOS; 

  cadastrarProduto(): void {
    
    console.log(this.repositoryService.getAll());

    const dialogRef = this.dialog.open(DialogCadastrarProdutoComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  editarProduto(produto: Produtos): void {
    const dialogRef = this.dialog.open(DialogEditarProdutoComponent, {
      width: '50%',
      data: {id: produto.id, nome: produto.nome, valor: produto.valor},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  excluirProduto(produto: Produtos): void {
    const dialogRef = this.dialog.open(DialogExcluirProdutoComponent, {
      width: '50%',
      data: {id: produto.id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
  }
}