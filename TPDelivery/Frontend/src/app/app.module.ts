import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';


import { AppRoutingModule } from './app-routing.module';
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
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
