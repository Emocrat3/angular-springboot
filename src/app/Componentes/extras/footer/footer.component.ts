import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goHome(){
    this.router.navigate(['home']);
  }
  goAgregarUsuario(){
    this.router.navigate(['agregarUsuario']);
  }
  goInventario(){
    this.router.navigate(['inventario']);
  }
  goReportes(){
    this.router.navigate(['reportes']);
  }


}
