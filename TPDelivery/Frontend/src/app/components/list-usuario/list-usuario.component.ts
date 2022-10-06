import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  users:any[]=[];

  constructor(
    public authService: AuthService,
    private http: HttpClient,
    private userService:UsuarioService){  
    }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((usersAPI:any)=>{
      this.users=usersAPI;
    });
  }

  public deleteUser(userID:any){
    //ESTO FUNCIONA PERO HAY QUE HACER EL MODAL PARA VERIFICAR LA SEGURIDAD
    /*
    this.userService.deleteUser(userID).subscribe((usersAPI:any)=>{
      this.users=usersAPI;
    });
    */
    console.log("User delete!");
  }

  public editUser(userID:any){
    let body; //ACA SE METERIAN TODOS LOS DATOS MODIFICADOS.
    //ACA SE CARGARIAN LOS DATOS DEL USUARIO A MODIFICAR
    //ACA SE PASARIA EL FORMULARIO ENTERO EN FORMATO JSON AL SERVICE PARA INSERTARLO  
    this.userService.editUserByID(userID,body).subscribe((usersAPI:any)=>{
      this.users=usersAPI;
    });
    console.log("User edited!");
  }


}
