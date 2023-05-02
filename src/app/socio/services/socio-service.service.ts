import { Injectable } from '@angular/core';
import { Socio } from '../interfaces/socio.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocioServiceService {

  private url:string = 'http://localhost:8081'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

   socioList():Observable<Socio[]>{
    return this.http.get<Socio[]>(`${this.url}/socios`)
   }

   getSocio(id:number):Observable<Socio>{
    return this.http.get<Socio>(`${this.url}/socio/${id}`)
   }

   createSocio(socio:Socio):Observable<Socio>{
    return this.http.post<Socio>(`${this.url}/socio`, socio,this.httpOptions)
   }

   updateSocio(id:number,socio:Socio):Observable<Socio>{
    return this.http.put<Socio>(`${this.url}/socio/${id}`, socio , this.httpOptions)
   }

   deleteSocio(id:number):Observable<Socio>{
    return this.http.delete<Socio>(`${this.url}/socio/${id}`)
   }
}
