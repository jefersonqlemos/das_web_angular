import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICarrinho } from 'src/app/services/interfaces/ICarrinho';
import { IProdutoCarrinho } from 'src/app/services/interfaces/IProdutoCarrinho';
import { CarrinhoRepositoryService } from 'src/app/services/repositories/carrinhos/carrinho-repository.service';
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
    @Inject(MAT_DIALOG_DATA) public carrinho: ICarrinho,
    public repositoryService: CarrinhoRepositoryService,
    public repositoryServiceProdutoCarrinhoByCarrinhoId: ProdutosCarrinhoByCarrinhoidService,
    public repositoryServiceProdutoCarrinho: ProdutosCarrinhoRepositoryService) { }

  produtos: IProdutoCarrinho[] = [];

  onNoClick(): void {
    this.dialogRef.close();
  }

  excluirCarrinho(carrinho: ICarrinho): void {
    this.repositoryService.remove(carrinho.id);
    this.produtos = this.repositoryServiceProdutoCarrinhoByCarrinhoId.getArrayItem(carrinho.id);

    this.produtos.forEach((value) => {
      console.log(value.produto.id);
      this.repositoryServiceProdutoCarrinho.remove(value.id);
    });

    this.dialogRef.close();
    window.location.reload();
  }

}
