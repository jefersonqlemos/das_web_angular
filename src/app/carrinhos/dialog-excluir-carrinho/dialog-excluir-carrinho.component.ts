import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICarrinho } from 'src/app/services/interfaces/ICarrinho';
import { CarrinhoRepositoryService } from 'src/app/services/repositories/carrinhos/carrinho-repository.service';

@Component({
  selector: 'app-dialog-excluir-carrinho',
  templateUrl: './dialog-excluir-carrinho.component.html',
  styleUrls: ['./dialog-excluir-carrinho.component.css']
})
export class DialogExcluirCarrinhoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogExcluirCarrinhoComponent>,
    @Inject(MAT_DIALOG_DATA) public carrinho: ICarrinho,
    public repositoryService: CarrinhoRepositoryService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  excluirCarrinho(carrinho: ICarrinho): void {
    this.repositoryService.remove(carrinho.id);
    this.dialogRef.close();
    window.location.reload();
  }

}
