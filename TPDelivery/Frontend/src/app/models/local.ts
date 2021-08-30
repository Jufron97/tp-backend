export class Local {

    _id?: string;
    nombre: string;
    descripcion: string;
    costoEnvio: number;
    tiempoEnvio: string;
    direccion: string;
    tags: string[];
    productos: Producto[];

    constructor(nom: string, desc: string, costo: number, tiempo: string, dire: string) {
        this.nombre = nom;
        this.descripcion = desc;
        this.productos = [];
        this.costoEnvio=costo;
        this.tiempoEnvio=tiempo;
        this.direccion=dire;
        this.tags = [];

    }
}

export class Producto {

    nombre: string;
    descripcion: string;
    categoria: string;
    subcategoria: string;
    precio: number;

    constructor(nom: string, des: string, cat: string, sub: string, pre: number) {
        this.nombre = nom;
        this.descripcion = des;
        this.categoria = cat;
        this.subcategoria = sub;
        this.precio = pre;
    }
}