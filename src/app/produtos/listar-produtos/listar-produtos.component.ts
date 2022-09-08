import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProductModel } from 'src/app/services/interfaces/IProduct';
import { ProductRepositoryService } from 'src/app/services/repositories/products/product-repository.service';
import { DialogCadastrarProdutoComponent } from '../dialog-cadastrar-produto/dialog-cadastrar-produto.component';
import { DialogEditarProdutoComponent } from '../dialog-editar-produto/dialog-editar-produto.component';
import { DialogExcluirProdutoComponent } from '../dialog-excluir-produto/dialog-excluir-produto.component';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css'],
})
export class ListarProdutosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'value', 'editar', 'excluir'];

  constructor(
    public dialog: MatDialog,
    public repositoryService: ProductRepositoryService
  ) {}

  LISTA_PRODUTOS: IProductModel[] = this.repositoryService.getAll();

  produtos = this.LISTA_PRODUTOS;

  private DIALOG_WIDTH = "50%"

  openDialog(type: any, data?: IProductModel): void {
    const dialogRef = this.dialog.open(type, {
      width: this.DIALOG_WIDTH,
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  cadastrarProduto(): void {
    this.openDialog(DialogCadastrarProdutoComponent);
  }

  editarProduto(produto: IProductModel): void {
    this.openDialog(DialogEditarProdutoComponent, produto);
  }

  excluirProduto(produto: IProductModel): void {
    this.openDialog(DialogExcluirProdutoComponent, produto);
  }

  ngOnInit(): void {}
}
