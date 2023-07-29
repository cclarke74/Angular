export class Product {
    name: string;
    quantity: number;
    expiryDate: Date;

    constructor(name: string, quantity: number, expiryDate: Date){ 
        this.name = name;
        this.quantity = quantity;
        this.expiryDate = expiryDate;
    }
}
