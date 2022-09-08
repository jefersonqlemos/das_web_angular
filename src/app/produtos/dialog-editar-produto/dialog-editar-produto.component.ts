import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProductModel } from 'src/app/services/interfaces/IProduct';
import { ProductRepositoryService } from 'src/app/services/repositories/products/product-repository.service';

@Component({
  selector: 'app-dialog-editar-produto',
  templateUrl: './dialog-editar-produto.component.html',
  styleUrls: ['./dialog-editar-produto.component.css'],
})
export class DialogEditarProdutoComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogEditarProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public produto: IProductModel,
    public repositoryService: ProductRepositoryService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  atualizarProduto(produto: IProductModel): void {
    this.repositoryService.update(produto);
    this.dialogRef.close();
  }
}
