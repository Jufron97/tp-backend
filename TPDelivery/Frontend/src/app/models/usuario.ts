export class Usuario {

    _id?: string;
    usuario: string;
    contraseña: string;
    nombreApellido: string;
    telefono: string;
    direccion: string;
    email: string;

    constructor(usu: string, cont: string, nomYApe: string, tel: string, dire: string, email: string,) {

        this.usuario = usu;
        this.contraseña = cont;
        this.nombreApellido = nomYApe;
        this.direccion = dire;
        this.telefono = tel;
        this.email = email;

    }

}