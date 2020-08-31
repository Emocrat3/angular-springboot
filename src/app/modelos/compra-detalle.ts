export class CompraDetalle {
    id:number;
    cantidad:number;
    precioCompra:number;
    precioVenta:number;

    constructor(id:number,cantidad:number,precioCompra:number,precioVenta:number){
        this.id = id;
        this.cantidad = cantidad;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        
    }
}
