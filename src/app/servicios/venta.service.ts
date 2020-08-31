import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Venta } from '../modelos/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private urlEndPint:string = 'http://localhost:8080/api/ventas';
  private httpHeaders = new HttpHeaders({'content-Type':'application/json'})  

  constructor(private http:HttpClient) { }

  getVentas():Observable<Venta[]>{
    return this.http.get(this.urlEndPint).pipe(
      map(response => response as Venta[])
    );
  }
  getVenta(id): Observable<Venta>{
    return this.http.get<Venta>(`${this.urlEndPint}/${id}`)
  }
  crearVenta(venta: Venta): Observable<Venta>{
    return this.http.post<Venta>(this.urlEndPint, venta, {headers:this.httpHeaders});
  }
  deleteVenta(id: number): Observable<Venta>{
    return this.http.delete<Venta>(`${this.urlEndPint}/${id}`, {headers:this.httpHeaders});
  }
  actualizarVenta(venta: Venta): Observable<Venta>{
    return this.http.put<Venta>(`${this.urlEndPint}/${venta.id}`, venta, {headers:this.httpHeaders});
  }
}
