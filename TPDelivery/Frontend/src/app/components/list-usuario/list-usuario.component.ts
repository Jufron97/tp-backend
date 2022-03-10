import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  constructor(public usuarioService: UsuarioService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }


  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe(
      data => {
        this.usuarioService.usuarios = data;
      },
      err => {
        console.log(err);
      }
    )
  }
  


  deleteUsuario(usu: Usuario) {
    this.usuarioService.deleteUsuario(<string>usu._id).subscribe(
      res => {
        this.toastr.error('El usuario fue eliminado', 'Usuario eliminado');
        this.getUsuarios();
      },
      err => {
        console.log(err);
      }
    )
  }

}
