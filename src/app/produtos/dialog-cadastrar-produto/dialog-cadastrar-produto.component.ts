import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';
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
    public localStorageService: LocalStorageService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  armazenarProduto(produto: Produtos): void {
    
    let produtos: Produtos[] = [];

    if(this.localStorageService.getItem('produto')){
      produtos = this.localStorageService.getItem('produto');
    }

    produtos.push(produto);

    this.localStorageService.setItem('produto', produtos);
    this.dialogRef.close();
    window.location.reload();
  }

}
