import { Injectable } from '@angular/core';
import { Sucursal } from '../modelos/sucursal';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {  HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  private urlEndPint:string = 'http://localhost:8080/api/sucursales';
  private httpHeaders = new HttpHeaders({'content-Type':'application/json'})  

  constructor(private http:HttpClient) { }

  getSucursales():Observable<Sucursal[]>{
    return this.http.get(this.urlEndPint).pipe(
      map(response => response as Sucursal[])
    );
  }
}
