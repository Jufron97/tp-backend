import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-pedido',
  templateUrl: './list-pedido.component.html',
  styleUrls: ['./list-pedido.component.css']
})
export class ListPedidoComponent implements OnInit {

  listPedidos: Usuario[] = [];
  
  constructor(private usuarioService: UsuarioService){ 
  }

  ngOnInit(): void {
    this.usuarioService.getPedidos()
  }

  getPedidos(){
    this.usuarioService.getPedidos().subscribe( data => {
      //console.log(data);
      this.listPedidos = data.pedidos;
    }, error => {
      console.log(error);
    })
    /*
    this.pedidosService.getPedidos().subscribe( data => {
      console.log(data);
      this.listPedidos = data;
    }, error => {
      console.log(error);
    })*/
  }

  cancelPedido(pedido: Pedido){

  }
}
