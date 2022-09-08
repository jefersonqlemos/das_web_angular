import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Produtos } from '../listar-produtos/listar-produtos.component';

@Component({
  selector: 'app-dialog-excluir-produto',
  templateUrl: './dialog-excluir-produto.component.html',
  styleUrls: ['./dialog-excluir-produto.component.css']
})
export class DialogExcluirProdutoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogExcluirProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public produto: Produtos,
    public localStorageService: LocalStorageService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  excluirProduto(produto: Produtos): void {
    
    let produtos: Produtos[] = [];
    
    produtos = this.localStorageService.getItem('produto');
    produtos = produtos.filter(item => item.id !== produto.id);

    console.log(produtos);

    this.localStorageService.setItem('produto', produtos);
    this.dialogRef.close();
    window.location.reload();
  }

}
