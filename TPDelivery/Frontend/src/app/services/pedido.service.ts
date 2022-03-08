import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  url = 'http://localhost:4000/';
  pedidos: Pedido[]=[];

  constructor(private http: HttpClient, private router: Router) { 
  }

  getPedidos(){
    return "Pedidos retornados";  
  }

  cancelPedido(){
    
  }
}
