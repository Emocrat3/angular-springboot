export class VentaDetalle {
    id:number;
    cantidad:number;
    descuento:number;
    valor:number;

    constructor(id:number,cantidad:number,descuento:number,valor:number){
        this.id = id;
        this.cantidad = cantidad;
        this.descuento = descuento;
        this.valor = valor;
        
    }
}
