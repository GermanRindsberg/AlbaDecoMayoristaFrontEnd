import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionGeneralComponent } from './components/administracion/administracion-general/administracion-general/administracion-general.component';
import { CarritoComprasComponent } from './components/administracion/gestion-pedidos/carrito-compras/carrito-compras.component';
import { GestionGeneralPedidosComponent } from './components/administracion/gestion-pedidos/gestion-general-pedidos/gestion-general-pedidos.component';
import { ListadoPedidosComponent } from './components/administracion/gestion-pedidos/listado-pedidos/listado-pedidos.component';
import { AgregarProductoComponent } from './components/administracion/gestion-producto/agregar-producto/agregar-producto.component';
import { GestionProductoComponent } from './components/administracion/gestion-producto/gestion-producto.component';
import { GestionUsuariosComponent } from './components/administracion/gestion-usuarios/gestion-usuarios.component';
import { HomeComponent } from './components/componentes-web/home/home.component';
import { LoginComponent } from './components/componentes-web/login/login.component';
import { RegistroComponent } from './components/componentes-web/registro/registro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gestionUsuarios', component: GestionUsuariosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'gestionProductos', component: GestionProductoComponent },
  { path: 'productoNuevo', component: AgregarProductoComponent },
  { path: 'productoNuevo/:idProducto', component: AgregarProductoComponent },
  { path: 'verCarrito', component: CarritoComprasComponent },
  { path: 'verMisPedidos', component: ListadoPedidosComponent },
  { path: 'verTodosLosPedidos', component: GestionGeneralPedidosComponent },
  { path: 'administracion', component: AdministracionGeneralComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
