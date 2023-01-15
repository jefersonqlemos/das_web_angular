import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IClient } from 'src/app/services/interfaces/IClient';
import { IClienteModel } from 'src/app/services/interfaces/ICliente';
import { ClientRepositoryService } from 'src/app/services/repositories/client/client-repository.service';
import { ClienteRepositoryService } from 'src/app/services/repositories/clientes/cliente-repository.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css'],
})
export class EditarClienteComponent {
  constructor(
    public dialogRef: MatDialogRef<EditarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public client: IClient,
    public clientRepositoryService: ClientRepositoryService,
    private _snackBar: MatSnackBar
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  atualizarCliente(client: IClient): void {
    //this.clientRepositoryService.update(client);
    this.dialogRef.close();
  }

  updateClient(client: IClient){
    this.clientRepositoryService.update(client).subscribe(data => 
      this.response(data)
    );
  }

  async response(data: any): Promise<void>{
    if(data=="OK"){
      this._snackBar.open("Cliente atualizado com sucesso", "sair", { duration: 3000 });
      this.dialogRef.close();
    }else{
      this._snackBar.open("algo deu errado", "sair", { duration: 3000 });
    }
  }
}
