import { Compra } from './compra';
import { Venta } from './venta';

export class Usuario {
    id:number;
    nombre:string;
    rut:number;
    digitoVerificador:string;
    direccion:string;
    numeroDireccion:number;
    comuna:string;
    telefono:number;
    email:string;
    nombreUsuario:string;
    contrasena:string;
    compras:Compra[];
    ventas:Venta[];
    

    constructor(id:number=null,nombre:string=null,rut:number=null,digitoVerificador:string=null,direccion:string=null,numeroDireccion:number=null,comuna:string=null,telefono:number=null,email:string=null,nombreUsuario:string=null,contrasena:string=null,compras:Compra[]=[],ventas:Venta[]=[]){
        this.id = id;
        this.nombre = nombre;
        this.rut = rut;
        this.digitoVerificador = digitoVerificador;
        this.direccion = direccion;
        this.numeroDireccion = numeroDireccion;
        this.comuna = comuna;
        this.telefono = telefono;
        this.email = email;
        this.nombreUsuario = nombreUsuario;
        this.contrasena = contrasena;
        this.compras = compras;
        this.ventas = ventas;
    }

}
