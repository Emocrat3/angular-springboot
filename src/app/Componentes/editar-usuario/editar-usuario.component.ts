import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.cargaraUsuario();
  }
  cargaraUsuario(){
    this.activatedRoute.params.subscribe(
      (params) => {
        let id = params["id"]
        if(id){
          this.usuarioService.getUsuario(id).subscribe(
            (response) => {
              this.usuario = response
            }
          )
        }
      }
    )
  }

  actualizar(){
    this.usuarioService.actualizarUsuario(this.usuario).subscribe(
      (response) => {
        alert("Usuario Actualizado con exito")
        this.router.navigate(['agregarUsuario']);
      }
    )
  }

}
