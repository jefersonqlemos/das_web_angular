import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICarrinho } from 'src/app/services/interfaces/ICarrinho';
import { CarrinhoRepositoryService } from 'src/app/services/repositories/carrinhos/carrinho-repository.service';

@Component({
  selector: 'app-dialog-remover-carrinho',
  templateUrl: './dialog-remover-carrinho.component.html',
  styleUrls: ['./dialog-remover-carrinho.component.css']
})
export class DialogRemoverCarrinhoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogRemoverCarrinhoComponent>,
    @Inject(MAT_DIALOG_DATA) public carrinho: ICarrinho,
    public repositoryService: CarrinhoRepositoryService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  removerCarrinho(carrinho: ICarrinho): void {
    this.repositoryService.remove(carrinho.id);
    this.dialogRef.close();
    window.location.reload();
  }
}
