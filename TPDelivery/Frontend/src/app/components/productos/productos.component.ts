import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';
import { MessageService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(public localService: LocalService, private _messageService: MessageService) {
    this._messageService.listen().subscribe((m: string) => {
      if(m!==""){
      console.log(m);
      this.getProductosName(m);
    }
    else{
      this.getProductos();
    }
    })
   }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    if (this.localService.selectedLocal != undefined && this.localService.selectedLocal._id) {

      this.localService.getProductos(this.localService.selectedLocal._id).subscribe(
        res => {
          this.localService.productos = res;
        },
        err => console.log(err))


    }

  }

getProductosName(m:string){

  if (this.localService.selectedLocal != undefined && this.localService.selectedLocal._id) {

    this.localService.getProductosByName(this.localService.selectedLocal._id, m).subscribe(
      res => {
        this.localService.productos = res;
      },
      err => console.log(err))
  }
}


}
