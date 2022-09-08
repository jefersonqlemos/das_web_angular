import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductRepositoryService } from 'src/app/services/repositories/products/product-repository.service';
import { Produtos } from '../listar-produtos/listar-produtos.component';

@Component({
  selector: 'app-dialog-cadastrar-produto',
  templateUrl: './dialog-cadastrar-produto.component.html',
  styleUrls: ['./dialog-cadastrar-produto.component.css']
})
export class DialogCadastrarProdutoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogCadastrarProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public produto: Produtos,
    public repositoryService: ProductRepositoryService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  armazenarProduto(produto: Produtos): void {
    this.repositoryService.setItem(produto);

    this.dialogRef.close();

    window.location.reload();
  }

}
