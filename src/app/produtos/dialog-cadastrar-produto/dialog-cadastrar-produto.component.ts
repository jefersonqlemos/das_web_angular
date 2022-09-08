import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IProductModel } from 'src/app/services/interfaces/IProduct';
import { ProductRepositoryService } from 'src/app/services/repositories/products/product-repository.service';

@Component({
  selector: 'app-dialog-cadastrar-produto',
  templateUrl: './dialog-cadastrar-produto.component.html',
  styleUrls: ['./dialog-cadastrar-produto.component.css']
})
export class DialogCadastrarProdutoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogCadastrarProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public produto: IProductModel,
    public repositoryService: ProductRepositoryService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  armazenarProduto(produto: IProductModel): void {
    produto.id = 0;
    this.repositoryService.add(produto);

    this.dialogRef.close();

    window.location.reload();
  }

}
