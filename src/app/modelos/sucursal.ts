export class Sucursal {
    id:number;
    nombre:string;
    direccion:string;
    numeroDireccion:number;
    comuna:string;
    telefono:number;
    
    constructor(id:number,nombre:string,direccion:string,numeroDireccion:number,comuna:string,telefono:number){
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.numeroDireccion = numeroDireccion;
        this.comuna = comuna;
        this.telefono = telefono;
        
    }
}
