import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // url da API
  private url:string = 'http://localhost:8080';

  // Construtor
  constructor(private http:HttpClient){}


}
