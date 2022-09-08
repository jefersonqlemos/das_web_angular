import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductRepositoryService } from 'src/app/services/repositories/products/product-repository.service';
import { Produtos } from '../listar-produtos/listar-produtos.component';

@Component({
  selector: 'app-dialog-excluir-produto',
  templateUrl: './dialog-excluir-produto.component.html',
  styleUrls: ['./dialog-excluir-produto.component.css']
})
export class DialogExcluirProdutoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogExcluirProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public produto: Produtos,
    public repositoryService: ProductRepositoryService
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  excluirProduto(produto: Produtos): void {
    this.repositoryService.remove(produto);
    this.dialogRef.close();
    window.location.reload();
  }

}
