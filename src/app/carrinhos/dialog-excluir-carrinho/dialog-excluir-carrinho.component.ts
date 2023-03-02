import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICarrinho } from 'src/app/services/interfaces/ICarrinho';
import { ICart } from 'src/app/services/interfaces/ICart';
import { IProdutoCarrinho } from 'src/app/services/interfaces/IProdutoCarrinho';
import { CarrinhoRepositoryService } from 'src/app/services/repositories/carrinhos/carrinho-repository.service';
import { CartProductRepositoryService } from 'src/app/services/repositories/cart-product/cart-product-repository.service';
import { CartRepositoryService } from 'src/app/services/repositories/cart/cart-repository.service';
import { ProdutosCarrinhoByCarrinhoidService } from 'src/app/services/repositories/produtos-carrinho-by-carrinhoid/produtos-carrinho-by-carrinhoid.service';
import { ProdutosCarrinhoRepositoryService } from 'src/app/services/repositories/produtos-carrinho/produtos-carrinho-repository.service';

@Component({
  selector: 'app-dialog-excluir-carrinho',
  templateUrl: './dialog-excluir-carrinho.component.html',
  styleUrls: ['./dialog-excluir-carrinho.component.css']
})
export class DialogExcluirCarrinhoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogExcluirCarrinhoComponent>,
    @Inject(MAT_DIALOG_DATA) public carrinho: ICart,
    public cartRepositoryService: CartRepositoryService,
    private _snackBar: MatSnackBar) { }

  produtos: IProdutoCarrinho[] = [];

  onNoClick(): void {
    this.dialogRef.close();
  }

  excluirCarrinho(carrinho: ICart): void {
    this.cartRepositoryService.delete(carrinho.id).subscribe(data => this.response(data));
    this.dialogRef.close();
    window.location.reload();
  }

  async response(data: any): Promise<void>{
    if(data=="OK"){
      this._snackBar.open("Carrinho excluido com sucesso", "sair", { duration: 3000 });
      this.dialogRef.close();
    }else{
      this._snackBar.open("algo deu errado", "sair", { duration: 3000 });
    }
  }

}
