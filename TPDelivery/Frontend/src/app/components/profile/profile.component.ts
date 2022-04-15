import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
   profileJson: string | undefined ;

  constructor(public authService:AuthService){ 

  }

  ngOnInit(): void {
    this.authService.getUser().subscribe( (profile) =>{
        this.profileJson = JSON.stringify(profile, null, 2);
    });
  }

}
