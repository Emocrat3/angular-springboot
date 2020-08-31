import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/modelos/sucursal';
import { SucursalService } from 'src/app/servicios/sucursal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccion-sucursal',
  templateUrl: './seleccion-sucursal.component.html',
  styleUrls: ['./seleccion-sucursal.component.css']
})
export class SeleccionSucursalComponent implements OnInit {

  sucursalesTotal: Sucursal[]=[];
  constructor(
    private sucursalService: SucursalService,
    private router: Router
    ) { }

  ngOnInit() {
    this.obtenerSucursales();
    }

  obtenerSucursales(){
    this.sucursalService.getSucursales().subscribe(
      (response) => {
        this.sucursalesTotal = response;
      }
    )
  }
  procesarSucursal(){
    this.router.navigate(['home']);
  }

}
