import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPint:string = 'http://localhost:8080/api/usuarios';
  private httpHeaders = new HttpHeaders({'content-Type':'application/json'})  

  constructor(private http:HttpClient) { }

  getUsuarios():Observable<Usuario[]>{
    return this.http.get(this.urlEndPint).pipe(
      map(response => response as Usuario[])
    );
  }
  getUsuario(id): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.urlEndPint}/${id}`)
  }
  crearUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.urlEndPint, usuario, {headers:this.httpHeaders});
  }
  deleteUsuario(id: number): Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.urlEndPint}/${id}`, {headers:this.httpHeaders});
  }
  actualizarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.urlEndPint}/${usuario.id}`, usuario, {headers:this.httpHeaders});
  }

}
