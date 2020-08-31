import { Usuario } from './usuario';
import { Sucursal } from './sucursal';
import { VentaDetalle } from './venta-detalle';

export class Venta {
    id:number;
    fecha:Date;
    numeroDocumento:number;
    usuario:Usuario[];
    sucursal:Sucursal[];
    ventaDetalle:VentaDetalle[];


    constructor(id:number=null,fecha:Date=null,numeroDocumento:number=null,usuario:Usuario[],sucursal:Sucursal[],ventaDetalle:VentaDetalle[]){
        this.id = id;
        this.fecha = fecha;
        this.numeroDocumento = numeroDocumento;
        this.usuario = usuario;
        this.sucursal = sucursal;
        this.ventaDetalle = ventaDetalle;
    }
}
