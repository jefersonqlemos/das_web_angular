import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Produtos } from '../listar-produtos/listar-produtos.component';

@Component({
  selector: 'app-dialog-editar-produto',
  templateUrl: './dialog-editar-produto.component.html',
  styleUrls: ['./dialog-editar-produto.component.css']
})
export class DialogEditarProdutoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogEditarProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public produto: Produtos,
    public localStorageService: LocalStorageService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  atualizarProduto(produto: Produtos): void {

    let produtos: Produtos[] = [];
    
    produtos = this.localStorageService.getItem('produto');

    const existing = produtos.find(x => x.id === produto.id);

     if (existing) {
        existing.id = produto.id;
        existing.nome = produto.nome;
        existing.valor = produto.valor;
      } else {
        produtos.push(produto);
      }

      this.localStorageService.setItem('produto', produtos);
      this.dialogRef.close();
      window.location.reload();
  }

}
