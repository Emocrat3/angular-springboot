export class Stock {
    id:number;
    stock:number;
    stockMinimo:number;

    constructor(id:number,stock:number,stockMinimo:number){
        this.id = id;
        this.stock = stock;
        this.stockMinimo = stockMinimo;
    }
}
