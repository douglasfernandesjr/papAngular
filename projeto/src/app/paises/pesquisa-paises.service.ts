import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PesquisaPaisesService {

  private baseUrl = 'https://restcountries.eu/rest/v2/lang/';

  constructor(private http: HttpClient) {

  }

  public ListarPaises(langCode: string) {
    return this.http.get<any[]>(this.baseUrl + langCode);
  }
}
