import { Component } from '@angular/core';
import { addSyntheticLeadingComment } from 'typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

onInit(){
  
  google.maps.event.addDomListener(window,"load",function(){

  });
}

}


