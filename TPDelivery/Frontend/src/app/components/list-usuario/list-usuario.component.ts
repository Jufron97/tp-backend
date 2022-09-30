import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  constructor(
    public usuarioService: UsuarioService, 
    public authService: AuthService,
    private toastr: ToastrService){ 
    }

  ngOnInit(): void {
    
  }

  //ACA VAN TODOS LOS METODOS DEL AUTH 0

}
