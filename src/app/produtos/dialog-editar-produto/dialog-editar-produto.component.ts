import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';

export interface Produtos {
  id: number;
  nome: string;
  valor: number;
}

@Component({
  selector: 'app-dialog-editar-produto',
  templateUrl: './dialog-editar-produto.component.html',
  styleUrls: ['./dialog-editar-produto.component.css']
})
export class DialogEditarProdutoComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogEditarProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public produto: Produtos,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
