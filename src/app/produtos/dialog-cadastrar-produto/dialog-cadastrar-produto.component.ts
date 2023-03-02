import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IProduct } from 'src/app/services/interfaces/IProduct';
import { ProductRepositoryService } from 'src/app/services/repositories/products/product-repository.service';

@Component({
  selector: 'app-dialog-cadastrar-produto',
  templateUrl: './dialog-cadastrar-produto.component.html',
  styleUrls: ['./dialog-cadastrar-produto.component.css']
})
export class DialogCadastrarProdutoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogCadastrarProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public product: IProduct,
    public productRepositoryService: ProductRepositoryService,
    private _snackBar: MatSnackBar
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  armazenarProduto(produto: IProduct): void {
    /*produto.id = 0;
    this.repositoryService.add(produto);

    this.dialogRef.close();

    window.location.reload();*/
  }

  storeProduct(product: IProduct){
    this.productRepositoryService.store(product).subscribe(data => 
      this.response(data)
    );
  }

  async response(data: any): Promise<void>{
    if(data=="OK"){
      this._snackBar.open("Produto cadastrado com sucesso", "sair", { duration: 3000 });
      this.dialogRef.close();
    }else{
      this._snackBar.open("algo deu errado", "sair", { duration: 3000 });
    }
  }

}
