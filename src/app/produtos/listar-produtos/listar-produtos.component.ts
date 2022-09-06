import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface Produtos {
  id: number;
  nome: string;
  valor: number;
}

const LISTA_PRODUTOS: Produtos[] = [
  {id: 1, nome: 'Hydrogen', valor: 1.00},
  {id: 2, nome: 'Helium', valor: 4.26},
  {id: 3, nome: 'Lithium', valor: 6.94},
  {id: 4, nome: 'Beryllium', valor: 9.12},
  {id: 5, nome: 'Boron', valor: 10.81},
  {id: 6, nome: 'Carbon', valor: 12.07},
  {id: 7, nome: 'Nitrogen', valor: 14.67},
  {id: 8, nome: 'Oxygen', valor: 15.94},
  {id: 9, nome: 'Fluorine', valor: 18.99},
  {id: 10, nome: 'Neon', valor: 20.17},
];

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'valor', 'editar', 'excluir'];
  produtos = LISTA_PRODUTOS;

  constructor(public dialog: MatDialog) { }

  cadastrarProduto(): void {
    const dialogRef = this.dialog.open(DialogCadastrarProduto, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  editarProduto(produto: Produtos): void {
    const dialogRef = this.dialog.open(DialogEditarProduto, {
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

@Component({
  selector: 'dialog-cadastrar-produto',
  templateUrl: './dialog-cadastrar-produto.html',
})
export class DialogCadastrarProduto {
  constructor(
    public dialogRef: MatDialogRef<DialogCadastrarProduto>,
    @Inject(MAT_DIALOG_DATA) public produto: Produtos,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-editar-produto',
  templateUrl: './dialog-editar-produto.html',
})
export class DialogEditarProduto {
  constructor(
    public dialogRef: MatDialogRef<DialogEditarProduto>,
    @Inject(MAT_DIALOG_DATA) public produto: Produtos,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}