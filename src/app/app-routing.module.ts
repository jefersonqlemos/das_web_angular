import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarCarrinhoComponent } from './carrinhos/criar-carrinho/criar-carrinho.component';
import { EditarCarrinhoComponent } from './carrinhos/editar-carrinho/editar-carrinho.component';
import { ListarCarrinhosComponent } from './carrinhos/listar-carrinhos/listar-carrinhos.component';
import { ListarPedidosComponent } from './pedidos/listar-pedidos/listar-pedidos.component';
import { ListarProdutosComponent } from './produtos/listar-produtos/listar-produtos.component';

const routes: Routes = [
  {path: 'listar-produtos', component: ListarProdutosComponent},
  {path: 'listar-carrinhos', component: ListarCarrinhosComponent},
  {path: 'listar-pedidos', component: ListarPedidosComponent},
  {path: 'criar-carrinho', component: CriarCarrinhoComponent},
  {path: 'editar-carrinho/:carrinhoId', component: EditarCarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
