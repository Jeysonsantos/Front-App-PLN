import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) {}
  
  gettexto() : Observable<any> {
    return this.http.get(this.url + 'texto/',
    {headers: this.httpHeaders });
  }

  gettexto1(id:any) : Observable<any> {
    return this.http.get(this.url + 'texto/' + id + '/',
    {headers: this.httpHeaders });
  }

  salvarlink(texto:any){
    return this.http.post(this.url + 'texto/', texto,
    {headers: this.httpHeaders });
  }

}