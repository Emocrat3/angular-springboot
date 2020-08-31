import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { HomeComponent } from './Componentes/home/home.component';
import { InventarioComponent } from './Componentes/inventario/inventario.component';
import { AgregarUsuarioComponent } from './Componentes/agregar-usuario/agregar-usuario.component';
import { ReportesComponent } from './Componentes/reportes/reportes.component';
import { HeaderComponent } from './Componentes/extras/header/header.component';
import { FooterComponent } from './Componentes/extras/footer/footer.component';
import { VentasComponent } from './componentes/inventario/ventas/ventas.component';
import { StockComponent } from './componentes/inventario/stock/stock.component';
import { InventarioTotalComponent } from './componentes/inventario/inventario-total/inventario-total.component';
import { UsuarioService } from './servicios/usuario.service';
import { EditarUsuarioComponent } from './componentes/editar-usuario/editar-usuario.component';
import { SeleccionSucursalComponent } from './componentes/seleccion-sucursal/seleccion-sucursal.component';
import { SucursalService } from './servicios/sucursal.service';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InventarioComponent,
    AgregarUsuarioComponent,
    ReportesComponent,
    HeaderComponent,
    FooterComponent,
    VentasComponent,
    StockComponent,
    InventarioTotalComponent,
    EditarUsuarioComponent,
    SeleccionSucursalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [UsuarioService, SucursalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
