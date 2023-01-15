import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IClient } from 'src/app/services/interfaces/IClient';
import { IClienteModel } from 'src/app/services/interfaces/ICliente';
import { ClientRepositoryService } from 'src/app/services/repositories/client/client-repository.service';
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
    public repositoryService: ClienteRepositoryService,
    public clientRepositoryService: ClientRepositoryService,
    private _snackBar: MatSnackBar
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

  storeClient(client: IClient){
    this.clientRepositoryService.store(client).subscribe(data => 
      this.response(data)
    );
  }

  async response(data: any): Promise<void>{
    if(data=="OK"){
      this._snackBar.open("Cliente cadastrado com sucesso", "sair", { duration: 3000 });
      this.dialogRef.close();
    }else{
      this._snackBar.open("algo deu errado", "sair", { duration: 3000 });
    }
  }

}
