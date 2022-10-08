import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IClienteModel } from 'src/app/services/interfaces/ICliente';
import { ClienteRepositoryService } from 'src/app/services/repositories/clientes/cliente-repository.service';

@Component({
  selector: 'app-inserir-cliente',
  templateUrl: './inserir-cliente.component.html',
  styleUrls: ['./inserir-cliente.component.css']
})
export class InserirClienteComponent {

  constructor(
    public dialogRef: MatDialogRef<InserirClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public cliente: IClienteModel,
    public repositoryService: ClienteRepositoryService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  armazenarCliente(cliente: IClienteModel): void {
    cliente.id = 0;
    this.repositoryService.add(cliente);

    this.dialogRef.close();

    window.location.reload();
  }

}
