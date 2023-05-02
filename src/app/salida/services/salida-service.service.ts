import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { salidas } from '../interfaces/salidas.interface';

@Injectable({
  providedIn: 'root'
})
export class SalidaServiceService {

  private url:string = 'http://localhost:8081'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

   salidaList():Observable<salidas[]>{
    console.log(`${this.url}/patrones`)
    return this.http.get<salidas[]>(`${this.url}/salidas`)
   }

   createPatron(salida:any):Observable<any>{
    return this.http.post<any>(`${this.url}/salidas`, salida, this.httpOptions)
   }



}
