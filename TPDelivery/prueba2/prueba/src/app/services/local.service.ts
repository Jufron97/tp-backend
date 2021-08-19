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
  selectedLocal: Local | undefined;
  productos: Producto[] = [];

  constructor(private http: HttpClient) { }

  getLocales() {
    return this.http.get<Local[]>(this.url);
  }

  getNombreLocal(id: string): Observable<any> {
    return this.http.get(this.url + id + '/get-name');
  }

  deleteLocal(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  getProductos(id: string): Observable<any> {
    return this.http.get(this.url + id + '/list-product');
  }

  guardarProductos(id: string, prod: Producto): Observable<any> {
    return this.http.post(this.url + id + '/add-product', prod);
  }

  deleteProductos(idL: string, idP: string): Observable<any> {
    return this.http.delete(this.url + idL + '/delete-product/' + idP);
  }

  obtenerProductos(idL: any, idP: any): Observable<any> {
    return this.http.get(this.url + idL + '/get-product/' + idP);
  }

  editarProductos(idL: string, idP: string, producto: Producto): Observable<any> {
    return this.http.put(this.url + idL + '/edit-product/' + idP, producto);
  }
}
