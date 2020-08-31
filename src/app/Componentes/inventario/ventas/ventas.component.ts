import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/modelos/venta';
import { VentaService } from 'src/app/servicios/venta.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  ventaTotal:Venta[]=[];
  constructor(private ventaService:VentaService) { }
  ngOnInit() {
    this.mostrarVenta();
  }
  mostrarVenta(){
    // let datoUsuario = new Usuario(null,dataUsuario.nombre,dataUsuario.rut,dataUsuario.cargo,dataUsuario.contrasena)
    this.ventaService.getVentas().subscribe(
      (response) => {
        this.ventaTotal = response;
      }
    )
  }
  agregarUsuario(dataVenta: Venta){
    this.ventaService.crearVenta(dataVenta).subscribe(
      (response) => {
        alert("Venta creada con Existo");
        this.mostrarVenta();
      }
    )
  }
  borrarVenta(venta: Venta){
    let respuesta = confirm("¿Estas seguro que deseas eliminar esta venta");
    console.log(respuesta);
    if(respuesta){
      this.ventaService.deleteVenta(venta.id).subscribe(
        (response) => {
          alert("Has eliminado con exito la venta");
          this.mostrarVenta();
        }
      )
    }
    
  }


}
