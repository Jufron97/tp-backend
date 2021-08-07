import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearLocalComponent } from './components/crear-local/crear-local.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListLocalComponent } from './components/list-local/list-local.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';

const routes: Routes = [
  { path: '', component: ListLocalComponent},
  { path: 'crear-local', component: CrearLocalComponent},
  { path: 'listar-producto/:idL', component: ListProductosComponent},
  { path: 'crear-producto/:idL', component: CrearProductoComponent},
  { path: 'editar-producto/:idL/:idP', component: CrearProductoComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
