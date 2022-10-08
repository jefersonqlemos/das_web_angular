import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarCarrinhoComponent } from './carrinhos/criar-carrinho/criar-carrinho.component';
import { EditarCarrinhoComponent } from './carrinhos/editar-carrinho/editar-carrinho.component';
import { ListarCarrinhosComponent } from './carrinhos/listar-carrinhos/listar-carrinhos.component';
import { ListarClienteComponent } from './clientes/listar-cliente/listar-cliente.component';
import { HomeComponent } from './home/home.component';
import { ListarPedidosComponent } from './pedidos/listar-pedidos/listar-pedidos.component';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listar-produtos', component: ListarProdutosComponent},
  {path: 'listar-carrinhos', component: ListarCarrinhosComponent},
  {path: 'listar-pedidos', component: ListarPedidosComponent},
  {path: 'criar-carrinho', component: CriarCarrinhoComponent},
  {path: 'editar-carrinho/:carrinhoId', component: EditarCarrinhoComponent},
  {path: 'listar-clientes', component: ListarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
