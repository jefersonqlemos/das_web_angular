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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogCadastrarProdutoComponent } from './produtos/dialog-cadastrar-produto/dialog-cadastrar-produto.component';
import { DialogEditarProdutoComponent } from './produtos/dialog-editar-produto/dialog-editar-produto.component';
import { DialogExcluirProdutoComponent } from './produtos/dialog-excluir-produto/dialog-excluir-produto.component';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { ProductRepositoryService } from './services/repositories/products/product-repository.service';
import { ListarCarrinhosComponent } from './carrinhos/listar-carrinhos/listar-carrinhos.component';
import { CriarCarrinhoComponent } from './carrinhos/criar-carrinho/criar-carrinho.component';
import { DialogBuscarProdutoComponent } from './carrinhos/dialog-buscar-produto/dialog-buscar-produto.component';
import { EditarCarrinhoComponent } from './carrinhos/editar-carrinho/editar-carrinho.component';
import { DialogVisualizarProdutosComponent } from './carrinhos/dialog-visualizar-produtos/dialog-visualizar-produtos.component';
import { DialogExcluirCarrinhoComponent } from './carrinhos/dialog-excluir-carrinho/dialog-excluir-carrinho.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { DialogBuscarClienteComponent } from './carrinhos/dialog-buscar-cliente/dialog-buscar-cliente.component';
import { DialogTransformarPedidoComponent } from './carrinhos/dialog-transformar-pedido/dialog-transformar-pedido.component';
import { ListarPedidosComponent } from './pedidos/listar-pedidos/listar-pedidos.component';
import { DialogVisualizarProdutosPedidosComponent } from './pedidos/dialog-visualizar-produtos-pedidos/dialog-visualizar-produtos-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarProdutosComponent,
    DialogCadastrarProdutoComponent,
    DialogEditarProdutoComponent,
    DialogExcluirProdutoComponent,
    ListarCarrinhosComponent,
    CriarCarrinhoComponent,
    DialogBuscarProdutoComponent,
    EditarCarrinhoComponent,
    DialogVisualizarProdutosComponent,
    DialogExcluirCarrinhoComponent,
    DialogBuscarClienteComponent,
    DialogTransformarPedidoComponent,
    ListarPedidosComponent,
    DialogVisualizarProdutosPedidosComponent
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
    FormsModule,
    CurrencyMaskModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [
    ProductRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
