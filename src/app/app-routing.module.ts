import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { AgregarUsuarioComponent } from './Componentes/agregar-usuario/agregar-usuario.component';
import { InventarioComponent } from './Componentes/inventario/inventario.component';
import { LoginComponent } from './Componentes/login/login.component';
import { ReportesComponent } from './Componentes/reportes/reportes.component';
import { VentasComponent } from './componentes/inventario/ventas/ventas.component';
import { StockComponent } from './componentes/inventario/stock/stock.component';
import { InventarioTotalComponent } from './componentes/inventario/inventario-total/inventario-total.component';
import { EditarUsuarioComponent } from './componentes/editar-usuario/editar-usuario.component';
import { SeleccionSucursalComponent } from './componentes/seleccion-sucursal/seleccion-sucursal.component';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'agregarUsuario', component: AgregarUsuarioComponent},
  {path:'agregarUsuario/editar/:id', component: EditarUsuarioComponent},
  {path:'inventario', component: InventarioComponent, 
  children:[
    {path:'', component: InventarioTotalComponent},
    {path:'inventarioTotal', component: InventarioTotalComponent},
    {path:'ventas', component: VentasComponent},
    {path:'stock', component: StockComponent}
  ]},
  {path:'reportes', component: ReportesComponent},
  
  {path:'seleccionSucursal', component: SeleccionSucursalComponent},
  {path:'**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
