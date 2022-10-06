import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
   profileJson: string | undefined ;

  constructor(
    public authService:AuthService,
    public userService :UsuarioService
    ){ 

  }

  ngOnInit(): void {
    this.userService.getUserData().subscribe(
      (userData:any) =>{
        console.log(userData)
        this.profileJson= JSON.stringify(userData,null, 2);
      }
    )  
  }

}
