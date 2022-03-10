import { Local, Producto } from "./local";
import { Usuario } from "./usuario";

export class Pedido {

    _id?: string;
    fechaCreacion: Date;
    descripcion:String;
    usuario: Usuario;
    costoEnvio?: number;
    tiempoEnvio?: string;
    Local: Local;
    productos: Producto[];

    constructor(usu: Usuario,local: Local,productos: Producto[], desc: string, costo: number, tiempo: string) {
        this.fechaCreacion = new Date(Date.now());
        this.descripcion = desc;
        this.productos = [];
        this.usuario= usu;
        this.Local=local;
        this.costoEnvio=costo;
        this.tiempoEnvio=tiempo;
    }
}

