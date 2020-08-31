import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  p: number = 1;
  usuariosTotal:Usuario[]=[];
  constructor(private usuarioService:UsuarioService) { }
  ngOnInit() {
    this.mostrarUsuarios();
  }
  mostrarUsuarios(){
    // let datoUsuario = new Usuario(null,dataUsuario.nombre,dataUsuario.rut,dataUsuario.cargo,dataUsuario.contrasena)
    this.usuarioService.getUsuarios().subscribe(
      (response) => {
        this.usuariosTotal = response;
      }
    )
  }
  agregarUsuario(dataUsuario: Usuario){
    this.usuarioService.crearUsuario(dataUsuario).subscribe(
      (response) => {
        alert(`Usuario ${dataUsuario.nombre} creado con exito`);
        this.mostrarUsuarios();
      }
    )
  }
  borrarUsuario(usuario: Usuario){
    let respuesta = confirm(`¿Estas seguro que deseas borrar al usuario ${usuario.nombre}?`);
    console.log(respuesta);
    if(respuesta){
      this.usuarioService.deleteUsuario(usuario.id).subscribe(
        (response) => {
          alert(`Has eliminado con exito al usuario ${usuario.nombre}`);
          this.mostrarUsuarios();
        }
      )
    }
    
  }


}                     
