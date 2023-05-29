import { Injectable } from '@angular/core';
import {environment } from '../../enviroments/environment';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Respuesta} from '../../models/Respuesta.model';
import { tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NssService {
  APIURL1 = environment.API_URL1;
  POKE = environment.API_URL3;
  Producto = environment.API_URL4;

  constructor(
    private http:HttpClient
  ) { }

  getCatalogo(){
    const misHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('ID', '84592');
    // return this.http.get(`${this.POKE}`,{
    //   headers:misHeaders
    // })
    return this.http.get<Respuesta>(`${this.POKE}`)
    .pipe( tap(response => {      })
    );
  }
  addProcut(_body: object){
    return this.http.post(`${this.Producto}`,_body)
    .pipe( tap(response =>{    })
    );
  }
}
