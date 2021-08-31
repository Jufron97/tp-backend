import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Local, Producto } from '../models/local';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  url = 'http://localhost:4000/';

  locales: Local[] = [];
  
  selectedLocal: Local = {
    _id: '',
    nombre: '',
    descripcion: '',
    costoEnvio: 0,
    tiempoEnvio: '',
    direccion: '',
    tags: [],
    productos: [],
  };

  productos: Producto[] = [];
  selectedProducto: Producto = {
    nombre: '',
    descripcion: '',
    categoria: '',
    precio: 0,
    subcategoria: ''
  };

  constructor(private http: HttpClient) { }

  ////// Local //////
  getLocales() {
    return this.http.get<Local[]>(this.url);
  }

  getNombreLocal(id: string): Observable<any> {
    return this.http.get(this.url + id + '/get-name');
  }

  deleteLocal(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  
  addLocal(loc:Local): Observable<any>   {
    return this.http.post(this.url + 'add-local', loc)
  }

  editLocal(id: string,loc:Local): Observable<any>  {
    return this.http.put(this.url +id+ '/edit-local', loc)
  }

  ////// Productos //////
  getProductos(id: string): Observable<any> {
    return this.http.get(this.url + id + '/list-product');
  }

  guardarProductos(id: string, prod: Producto): Observable<any> {
    return this.http.post(this.url + id + '/add-product', prod);
  }

  deleteProductos(idL: string, nomProd: string): Observable<any> {
    return this.http.delete(this.url + idL + '/delete-product/' + nomProd);
  }

  obtenerProductos(idL: any, idP: any): Observable<any> {
    return this.http.get(this.url + idL + '/get-product/' + idP);
  }

  editarProductos(idL: string, nom: string, producto: Producto): Observable<any> {
    return this.http.put(this.url + idL + '/edit-product/' + nom, producto);
  }

  getLocalesByName(name: string) {
    return this.http.get<Local[]>(this.url + name + '/find-locales-name');
  }

  getProductosByName(idL: string, name: string) {
    return this.http.get<Producto[]>(this.url + idL + '/find-productos-name/' + name);
  }

}
