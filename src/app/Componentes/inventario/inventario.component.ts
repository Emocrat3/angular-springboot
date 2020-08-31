import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goInventarioTotal(){
    this.router.navigate(['inventario/inventarioTotal'])
  }
  goVentas(){
    this.router.navigate(['inventario/ventas'])
  }
  goStock(){
    this.router.navigate(['inventario/stock'])
  }

}
