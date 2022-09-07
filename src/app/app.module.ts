import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from './services/local-storage.service';
import { DialogCadastrarProdutoComponent } from './produtos/dialog-cadastrar-produto/dialog-cadastrar-produto.component';
import { DialogEditarProdutoComponent } from './produtos/dialog-editar-produto/dialog-editar-produto.component';
import { DialogExcluirProdutoComponent } from './produtos/dialog-excluir-produto/dialog-excluir-produto.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarProdutosComponent,
    DialogCadastrarProdutoComponent,
    DialogEditarProdutoComponent,
    DialogExcluirProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
