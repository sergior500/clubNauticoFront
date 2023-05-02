import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patron } from '../interfaces/patron.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatronServiceService {

  private url:string = 'http://localhost:8081'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

   patronList():Observable<Patron[]>{
    console.log(`${this.url}/patrones`)
    return this.http.get<Patron[]>(`${this.url}/patrones`)
   }

   getPatron(id:number):Observable<Patron>{
    return this.http.get<Patron>(`${this.url}/patron/${id}`)
   }

   createPatron(patron:Patron):Observable<Patron>{
    return this.http.post<Patron>(`${this.url}/patron`, patron, this.httpOptions)
   }

   updatePatron(id:number,patron:Patron):Observable<Patron>{
    return this.http.put<Patron>(`${this.url}/patron/${id}`, patron, this.httpOptions)
   }

   deletePatron(id:number):Observable<Patron>{
    return this.http.delete<Patron>(`${this.url}/patron/${id}`)
   }

  
}
