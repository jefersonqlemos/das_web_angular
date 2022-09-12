import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProdutoCarrinho } from 'src/app/services/interfaces/IProdutoCarrinho';
import { CarrinhoRepositoryService } from 'src/app/services/repositories/carrinhos/carrinho-repository.service';

@Component({
  selector: 'app-dialog-visualizar-produtos',
  templateUrl: './dialog-visualizar-produtos.component.html',
  styleUrls: ['./dialog-visualizar-produtos.component.css']
})
export class DialogVisualizarProdutosComponent implements OnInit {

  displayedColumns: string[] = [ 'produtoId', 'quantidade', 'valor'];

  constructor(
    public dialogRef: MatDialogRef<DialogVisualizarProdutosComponent>,
    @Inject(MAT_DIALOG_DATA) public produtos: IProdutoCarrinho[],
    public repositoryService: CarrinhoRepositoryService
    ) { }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
