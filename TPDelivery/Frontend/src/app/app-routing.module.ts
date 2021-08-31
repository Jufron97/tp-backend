import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearLocalComponent } from './components/crear-local/crear-local.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListLocalComponent } from './components/list-local/list-local.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { LandingComponent } from './components/landing/landing.component';
import { LocalesComponent } from './components/locales/locales.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AbmLocalComponent } from './components/abm-local/abm-local.component';
import { ListPedidoComponent } from './components/list-pedido/list-pedido.component';
import { ListUsuarioComponent } from './components/list-usuario/list-usuario.component';
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'crear-local', component: CrearLocalComponent },
  { path: 'listar-producto/:idL', component: ListProductosComponent },
  { path: 'crear-producto/:idL', component: CrearProductoComponent },
  { path: 'editar-producto/:idL/:idP', component: CrearProductoComponent },
  { path: 'locales', component: LocalesComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'abm-local', component: AbmLocalComponent, canActivate: [AuthGuard] },
  { path: 'list-pedido', component: ListPedidoComponent, canActivate: [AuthGuard] },
  { path: 'list-usuario', component: ListUsuarioComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
