import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-button-login',
  templateUrl: './button-login.component.html',
  styleUrls: ['./button-login.component.css']
})
export class ButtonLoginComponent implements OnInit {

  constructor(
    public authService:AuthService){
  }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.authService.logout();
  }

  iniciarSesion(){
    this.authService.loginWithRedirect();
  }

}
