//-------- Modulos --------
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptorService } from "./services/token-interceptor.service";
//-------- Modulos --------
//-------- Auth 0--------
import { AuthModule } from '@auth0/auth0-angular';
import { Auth0Guard } from './guards/auth0.guard';
//-------- Auth 0--------
//-------- Componentes--------
import { AppComponent } from './app.component';
import { CrearLocalComponent } from './components/crear-local/crear-local.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { ListLocalComponent } from './components/list-local/list-local.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LocalesComponent } from './components/locales/locales.component';
import { MapComponent } from './components/map/map.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AbmLocalComponent } from './components/abm-local/abm-local.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ListUsuarioComponent } from './components/list-usuario/list-usuario.component';
import { ListPedidoComponent } from './components/list-pedido/list-pedido.component';
import { CarouselComponent } from './components/carousel/carousel.component';
//-------- Componentes--------

@NgModule({
  declarations: [
    AppComponent,
    CrearLocalComponent,
    CrearProductoComponent,
    ListProductosComponent,
    ListLocalComponent,
    LandingComponent,
    NavbarComponent,
    LocalesComponent,
    MapComponent,
    ProductosComponent,
    AbmLocalComponent,
    FooterComponent,
    SearchbarComponent,
    ListUsuarioComponent,
    ListPedidoComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBOOnK5VbqwfeYaM2zWDOFxG1XzFNrbMm4'
    }),
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-3h2tiekd.us.auth0.com',
      clientId: 'KaaqTbntsrRaG9wHZ3IZsTzGk1FcLWb1'
    }),
  ],
  providers: [
    Auth0Guard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
