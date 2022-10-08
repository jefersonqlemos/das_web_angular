import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IClienteModel } from 'src/app/services/interfaces/ICliente';
import { ClienteRepositoryService } from 'src/app/services/repositories/clientes/cliente-repository.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css'],
})
export class EditarClienteComponent {
  constructor(
    public dialogRef: MatDialogRef<EditarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public cliente: IClienteModel,
    public repositoryService: ClienteRepositoryService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  atualizarCliente(cliente: IClienteModel): void {
    this.repositoryService.update(cliente);
    this.dialogRef.close();
  }
}
