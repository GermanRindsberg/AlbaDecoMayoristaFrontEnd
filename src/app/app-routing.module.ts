import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionGeneralComponent } from './components/administracion/administracion-general/administracion-general/administracion-general.component';
import { CarritoComprasComponent } from './components/administracion/gestion-pedidos/carrito-compras/carrito-compras.component';
import { GestionGeneralPedidosComponent } from './components/administracion/gestion-pedidos/gestion-general-pedidos/gestion-general-pedidos.component';
import { ListadoPedidosComponent } from './components/administracion/gestion-pedidos/listado-pedidos/listado-pedidos.component';
import { AgregarProductoComponent } from './components/administracion/gestion-producto/agregar-producto/agregar-producto.component';
import { GestionProductoComponent } from './components/administracion/gestion-producto/gestion-producto.component';
import { GestionUsuariosComponent } from './components/administracion/gestion-usuarios/gestion-usuarios.component';
import { ConfiguracionesComponent } from './components/componentes-web/configuraciones/configuraciones.component';
import { HomeComponent } from './components/componentes-web/home/home.component';
import { LoginComponent } from './components/componentes-web/login/login.component';
import { RegistroComponent } from './components/componentes-web/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'gestionUsuarios', component: GestionUsuariosComponent,canActivate:[AuthGuard] },
  { path: 'gestionProductos', component: GestionProductoComponent, canActivate:[AuthGuard]  },
  { path: 'productoNuevo', component: AgregarProductoComponent , canActivate:[AuthGuard] },
  { path: 'productoNuevo/:idProducto', component: AgregarProductoComponent, canActivate:[AuthGuard]  },
  { path: 'administracion', component: AdministracionGeneralComponent, canActivate:[AuthGuard]},
  { path: 'gestionVisuales', component: ConfiguracionesComponent,canActivate:[AuthGuard]},
  { path: 'verTodosLosPedidos', component: GestionGeneralPedidosComponent, canActivate:[AuthGuard] },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'verCarrito', component: CarritoComprasComponent },
  
  { path: 'verMisPedidos', component: ListadoPedidosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
