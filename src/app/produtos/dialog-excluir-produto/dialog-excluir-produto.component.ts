import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProductModel } from 'src/app/services/interfaces/IProduct';
import { ProductRepositoryService } from 'src/app/services/repositories/products/product-repository.service';

@Component({
  selector: 'app-dialog-excluir-produto',
  templateUrl: './dialog-excluir-produto.component.html',
  styleUrls: ['./dialog-excluir-produto.component.css']
})
export class DialogExcluirProdutoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogExcluirProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public produto: IProductModel,
    public repositoryService: ProductRepositoryService
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  excluirProduto(produto: IProductModel): void {
    this.repositoryService.remove(produto.id);
    this.dialogRef.close();
    window.location.reload();
  }

}
