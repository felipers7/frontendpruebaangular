import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { User } from '../../models/user.model';
import { Token } from '../../models/token.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }


  getToken(user: User){
    return this.http.post<Token>(`${environment.url_api}/login`,user);
  }
}
