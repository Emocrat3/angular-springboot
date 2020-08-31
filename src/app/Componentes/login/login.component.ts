import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuariosTotal: Usuario[] = [];
  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  mostrarUsuarios() {
    // let datoUsuario = new Usuario(null,dataUsuario.nombre,dataUsuario.rut,dataUsuario.cargo,dataUsuario.contrasena)

  }

  validar(datosUsuario) {
    this.usuarioService.getUsuarios().subscribe(
      (response) => {
        this.usuariosTotal = response;
        console.log(this.usuariosTotal)

        let flag = true;
        for (let i = 0; i < this.usuariosTotal.length; i++) {
          if ((datosUsuario.nombre == this.usuariosTotal[i].nombre) && (datosUsuario.contrasena == this.usuariosTotal[i].contrasena)) {
            this.router.navigate(['seleccionSucursal']);
            flag = false; 
          }

        }
        if (flag) {
          alert("Usuario y/o contraseña incorrectas")
        }
      }
    )

  }


}
