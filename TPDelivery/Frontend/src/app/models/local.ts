export class Local {
    _id: string;
    nombre: string;
    productos: Producto[];

    constructor(nom: string) {
        this.nombre = nom;
        this.productos = [];
        this._id = "";
    }

    devNombre() {
        return this.nombre
    }
}

export class Producto {

    _id?: string;
    nombre: string;
    descripcion: string;
    categoria: string;
    subcategoria: string;
    //stock: number;
    precio: number;

    constructor(nom: string, des: string, cat: string, sub: string, pre: number, sto: number) {
        this.nombre = nom;
        this.descripcion = des;
        this.categoria = cat;
        this.subcategoria = sub;
        //this.stock = sto;
        this.precio = pre;
    }
}