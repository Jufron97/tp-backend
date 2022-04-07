import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent implements OnInit {
  // Inject the authentication service into your component through the constructor
  
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {

  }

  ngOnInit(): void {
    
  }

}

