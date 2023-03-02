import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IProduct } from 'src/app/services/interfaces/IProduct';
import { ProductRepositoryService } from 'src/app/services/repositories/products/product-repository.service';

@Component({
  selector: 'app-dialog-excluir-produto',
  templateUrl: './dialog-excluir-produto.component.html',
  styleUrls: ['./dialog-excluir-produto.component.css']
})
export class DialogExcluirProdutoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogExcluirProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public product: IProduct,
    public productRepositoryService: ProductRepositoryService,
    private _snackBar: MatSnackBar
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  excluirProduto(produto: IProduct): void {
    /*this.repositoryService.remove(produto.id);
    this.dialogRef.close();
    window.location.reload();*/
  }

  deleteProduct(id: any): void {
    this.productRepositoryService.delete(id).subscribe(data => this.response(data))
  }

  async response(data: any): Promise<void>{
    if(data=="OK"){
      this._snackBar.open("Produto excluido com sucesso", "sair", { duration: 3000 });
      this.dialogRef.close();
    }else{
      this._snackBar.open("algo deu errado", "sair", { duration: 3000 });
    }
  }

}
