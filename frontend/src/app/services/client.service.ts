import { Injectable, Compiler, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../models/client';

const httpOptions  = {
  headers : new HttpHeaders({
      'Content-type' : 'application/json',
  })
};

const api = 'http://127.0.0.1:8000/api/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService implements OnInit{

  constructor(private http : HttpClient) { }


  ngOnInit() {
  }

  getListeClients(){
    return this.http.get<Client[]>(api,httpOptions);
  }

  createClient(data:any){
      return this.http.post<Client>(api,data,httpOptions);
  }

  editerClient(client:any){
    return this.http.get(`${api}/${client}`,httpOptions);
  }

  updateClient(id:number,data:any){
    return this.http.patch<Client>(`${api}/${id}`,data,httpOptions);
  }

  deleteClient(client:any){
    return this.http.delete(`${api}/${client}`,httpOptions);
  }

}
