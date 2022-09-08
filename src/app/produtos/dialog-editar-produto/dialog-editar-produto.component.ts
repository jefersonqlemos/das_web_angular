import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductRepositoryService } from 'src/app/services/repositories/products/product-repository.service';
import { Produtos } from '../listar-produtos/listar-produtos.component';

@Component({
  selector: 'app-dialog-editar-produto',
  templateUrl: './dialog-editar-produto.component.html',
  styleUrls: ['./dialog-editar-produto.component.css'],
})
export class DialogEditarProdutoComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogEditarProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public produto: Produtos,
    public repositoryService: ProductRepositoryService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  atualizarProduto(produto: Produtos): void {
    this.repositoryService.update(produto);
    this.dialogRef.close();
    window.location.reload();
  }
}
