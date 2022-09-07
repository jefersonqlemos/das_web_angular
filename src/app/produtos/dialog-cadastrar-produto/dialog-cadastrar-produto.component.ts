import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';

export interface Produtos {
  id: number;
  nome: string;
  valor: number;
}

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
    
    //ListaProduto: Produtos[] = [ produto ];

    //const arr4 = [...this.localStorageService.getItem('produto'), ...produto];

    this.localStorageService.setItem('produto', produto);
    this.dialogRef.close();
  }

}
