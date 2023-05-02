import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Barco } from '../interfaces/barco.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BarcoService {

  private url:string = 'http://localhost:8081'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

   barcoList():Observable<Barco[]>{
    return this.http.get<Barco[]>(`${this.url}/barcos`)
   }

   getBarco(id:number):Observable<Barco>{
    return this.http.get<Barco>(`${this.url}/barco/${id}`)
   }

   createBarco(barco:Barco):Observable<Barco>{
    return this.http.post<Barco>(`${this.url}/barco`, barco, this.httpOptions)
   }

   updateBarco(id:number,barco:Barco):Observable<Barco>{
    return this.http.put<Barco>(`${this.url}/barco/${id}`, barco, this.httpOptions)
   }

   deleteBarco(id:number):Observable<Barco>{
    return this.http.delete<Barco>(`${this.url}/barco/${id}`)
   }
}
