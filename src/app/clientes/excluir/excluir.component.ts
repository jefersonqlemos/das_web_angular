import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IClienteModel } from 'src/app/services/interfaces/ICliente';
import { ClienteRepositoryService } from 'src/app/services/repositories/clientes/cliente-repository.service';

@Component({
  selector: 'app-excluir-cliente',
  templateUrl: './excluir-cliente.component.html',
  styleUrls: ['./excluir-cliente.component.css']
})
export class ExcluirClienteComponent {

  constructor(
    public dialogRef: MatDialogRef<ExcluirClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public cliente: IClienteModel,
    public repositoryService: ClienteRepositoryService
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  excluirCliente(cliente: IClienteModel): void {
    this.repositoryService.remove(cliente.id);
    this.dialogRef.close();
    window.location.reload();
  }

}
