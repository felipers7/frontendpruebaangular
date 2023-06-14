import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Coordinate } from './../../models/coordinate.model';

import { CheckToken } from './../../interceptors/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class CoordinatesService {

  constructor(
    private http: HttpClient
  ) { }

  //Ell llamago HTTP debe especificar el interceptor
  getCoordinate(latitud: string | null , longitud: string | null){
    return this.http.get<Coordinate>(`${environment.url_api}/v1/coordinates?latitud=${latitud}&longitud=${longitud}`,{context: CheckToken()});
  }

}
