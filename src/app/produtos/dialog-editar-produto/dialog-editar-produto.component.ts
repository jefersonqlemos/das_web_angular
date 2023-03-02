import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IProduct } from 'src/app/services/interfaces/IProduct';
import { ProductRepositoryService } from 'src/app/services/repositories/products/product-repository.service';

@Component({
  selector: 'app-dialog-editar-produto',
  templateUrl: './dialog-editar-produto.component.html',
  styleUrls: ['./dialog-editar-produto.component.css'],
})
export class DialogEditarProdutoComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogEditarProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public product: IProduct,
    public productRepositoryService: ProductRepositoryService,
    private _snackBar: MatSnackBar
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  atualizarProduto(produto: IProduct): void {
    //this.repositoryService.update(produto);
    //this.dialogRef.close();
  }

  updateProduct(product: IProduct){
    this.productRepositoryService.update(product).subscribe(data => 
      this.response(data)
    );
  }

  async response(data: any): Promise<void>{
    if(data=="OK"){
      this._snackBar.open("Produto atualizado com sucesso", "sair", { duration: 3000 });
      this.dialogRef.close();
    }else{
      this._snackBar.open("algo deu errado", "sair", { duration: 3000 });
    }
  }
}
