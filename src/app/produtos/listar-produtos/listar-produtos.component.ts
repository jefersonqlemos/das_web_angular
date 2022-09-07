import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { DialogCadastrarProdutoComponent } from '../dialog-cadastrar-produto/dialog-cadastrar-produto.component';
import { DialogEditarProdutoComponent } from '../dialog-editar-produto/dialog-editar-produto.component';

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

  constructor(public dialog: MatDialog, public localStorageService: LocalStorageService) { }

  LISTA_PRODUTOS: Produtos[] = [
    this.localStorageService.getItem('produto')
  ];
  produtos = this.LISTA_PRODUTOS; 

  cadastrarProduto(): void {
    console.log(this.localStorageService.getItem('produto'));

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

  ngOnInit(): void {
  }
}