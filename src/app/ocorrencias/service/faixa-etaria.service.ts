import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FaixaEtaria } from '../model/faixaEtaria';

@Injectable({
  providedIn: 'root',
})
export class FaixaEtariaService {
  constructor(private http: HttpClient) {}

  listFaixasEtarias(): Observable<FaixaEtaria[]> {
    const url = '/api/faixaetaria';
    return this.http.get<FaixaEtaria[]>(url);
  }
}
