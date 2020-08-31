export class Compra {
    id:number;
    fecha:Date;
    numeroDocumento:number;

    constructor(id:number,fecha:Date,numeroDocumento:number){
        this.id = id;
        this.fecha = fecha;
        this.numeroDocumento = numeroDocumento;
        
    }
}
