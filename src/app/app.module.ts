import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GoogleLoginProvider, FacebookLoginProvider, SocialLoginModule, SocialAuthServiceConfig} from'angularx-social-login';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { BuscadorUsuarioPipe } from './pipes/usuarios/buscador-usuario.pipe';
import { SortablejsModule } from 'ngx-sortablejs';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ColorSwatchesModule } from 'ngx-color/swatches';
import { OrderByPipe } from './pipes/productos/order-by.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';

import { NavbarComponent } from './components/componentes-web/navbar/navbar.component';
import { HeaderComponent } from './components/componentes-web/header/header.component';
import { HomeComponent } from './components/componentes-web/home/home.component';
import { LoginComponent } from './components/componentes-web/login/login.component';
import { BotonUserComponent } from './components/componentes-web/boton-user/boton-user.component';
import { RegistroComponent } from './components/componentes-web/registro/registro.component'
import { GestionUsuariosComponent } from './components/administracion/gestion-usuarios/gestion-usuarios.component';
import { TablaUsuariosComponent } from './components/administracion/gestion-usuarios/tabla-usuarios/tabla-usuarios.component';
import { ModalDetalleUsuarioComponent } from './components/administracion/gestion-usuarios/modal-detalle-usuario/modal-detalle-usuario.component';
import { GestionProductoComponent } from './components/administracion/gestion-producto/gestion-producto.component';
import { TablaProductosComponent } from './components/administracion/gestion-producto/tabla-productos/tabla-productos.component';
import { BuscadorProductosPipe } from './pipes/productos/buscador-productos.pipe';
import { AgregarProductoComponent } from './components/administracion/gestion-producto/agregar-producto/agregar-producto.component';
import { FotosProductoComponent } from './components/administracion/gestion-producto/agregar-producto/fotos-producto/fotos-producto.component';
import { SelectFamiliaComponent } from './components/administracion/gestion-producto/select-familia/select-familia.component';
import { ModalFamiliaComponent } from './components/administracion/gestion-producto/select-familia/modal-familia/modal-familia.component';
import { Datos_productoComponent } from './components/administracion/gestion-producto/agregar-producto/datos_producto/datos_producto.component'; 
import { ModalSubcategoriaComponent } from './components/administracion/gestion-producto/select-familia/modal-subcategoria/modal-subcategoria.component';
import { ModalFotoGrandeComponent } from './components/componentes-web/home/modal-foto-grande/modal-foto-grande.component';
import { DetalleProductoComponent } from './components/componentes-web/home/detalle-producto/detalle-producto.component';
import { BotonCarritoComponent } from './components/administracion/gestion-pedidos/boton-carrito/boton-carrito.component';
import { CarritoComprasComponent } from './components/administracion/gestion-pedidos/carrito-compras/carrito-compras.component';
import { MatselectDireccionComponent } from './components/administracion/gestion-pedidos/carrito-compras/matselect-direccion/matselect-direccion.component';
import { MatselectDatosPersonalesComponent } from './components/administracion/gestion-pedidos/carrito-compras/matselect-datos-personales/matselect-datos-personales.component';
import { MatselectPasosComponent } from './components/administracion/gestion-pedidos/carrito-compras/matselect-pasos/matselect-pasos.component';
import { ListadoPedidosComponent } from './components/administracion/gestion-pedidos/listado-pedidos/listado-pedidos.component';
import { ModalPedidoComponent } from './components/administracion/gestion-pedidos/listado-pedidos/modal-pedido/modal-pedido.component';
import { GestionGeneralPedidosComponent } from './components/administracion/gestion-pedidos/gestion-general-pedidos/gestion-general-pedidos.component';
import { BuscadorPedidosPipe } from './pipes/pedidos/buscador-pedidos.pipe';
import { AdministracionGeneralComponent } from './components/administracion/administracion-general/administracion-general/administracion-general.component';
import { SelectCategoriaComponent } from './components/componentes-web/filtrador/select-categoria/select-categoria.component';
import { SelectSubCategoriaComponent } from './components/componentes-web/filtrador/select-sub-categoria/select-sub-categoria.component';
import { FiltradorComponent } from './components/componentes-web/filtrador/filtrador.component';
import { CookieService } from 'ngx-cookie-service';
import { ModalDetallePedidosComponent } from './components/administracion/gestion-usuarios/modal-detalle-pedidos/modal-detalle-pedidos/modal-detalle-pedidos.component';
import { FiltradorNavbarComponent } from './components/componentes-web/navbar/filtroNavbar/filtrador-navbar/filtrador-navbar.component';
import { ConfiguracionesComponent } from './components/componentes-web/configuraciones/configuraciones.component';
import { PortadasComponent } from './components/componentes-web/configuraciones/portadas/portadas/portadas.component';
import { GeneralesComponent } from './components/componentes-web/configuraciones/configuraciones-generales/generales/generales.component';
import {MatTreeModule} from '@angular/material/tree';
import { CategoriaComponent } from './components/administracion/gestion-producto/agregar-producto/categoria/categoria.component';
import { ModalCategoriaComponent } from './components/administracion/gestion-producto/agregar-producto/categoria/modal-categoria/modal-categoria.component';
import { VarianteComponent } from './components/administracion/gestion-producto/agregar-producto/variante/variante.component';
import { ModalVarianteComponent } from './components/administracion/gestion-producto/agregar-producto/variante/modal-variante/modal-variante.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    BotonUserComponent,
    RegistroComponent,
    GestionUsuariosComponent,
    TablaUsuariosComponent,
    ModalDetalleUsuarioComponent,
    BuscadorUsuarioPipe,
    GestionProductoComponent,
    TablaProductosComponent,
    BuscadorProductosPipe,
    AgregarProductoComponent,
    FotosProductoComponent,
    SelectFamiliaComponent,
    ModalFamiliaComponent,
    Datos_productoComponent,
    ModalSubcategoriaComponent,
    OrderByPipe,
    ModalFotoGrandeComponent,
    DetalleProductoComponent,
    BotonCarritoComponent,
    CarritoComprasComponent,
    MatselectDireccionComponent,
    MatselectDatosPersonalesComponent,
    MatselectPasosComponent,
    ListadoPedidosComponent,
    ModalPedidoComponent,
    GestionGeneralPedidosComponent,
    BuscadorPedidosPipe,
    AdministracionGeneralComponent,
    SelectCategoriaComponent,
    SelectSubCategoriaComponent,
    FiltradorComponent,
    ModalDetallePedidosComponent,
    ConfiguracionesComponent,
    FiltradorNavbarComponent,
    PortadasComponent,
    GeneralesComponent,
    CategoriaComponent,
    ModalCategoriaComponent,
    VarianteComponent,
    ModalVarianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule,
    SocialLoginModule,
    GooglePlaceModule,
    SortablejsModule,
    ColorSwatchesModule,
    
    NgxDropzoneModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatCardModule, 
    ReactiveFormsModule,
    MatTreeModule
  ],
  providers: [
    CookieService,
    {
      provide:'SocialAuthServiceConfig',
      useValue:{
        autoLogin:false,
        providers:[
          {
            id:FacebookLoginProvider.PROVIDER_ID,
            provider:new FacebookLoginProvider('3087708154829800')
          },
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1077106997457-h29p9udk59br3t2csln1kivvj2g828nc.apps.googleusercontent.com'
            )
          }
        ]
      }as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
