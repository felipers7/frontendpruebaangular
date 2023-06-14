import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  //También se encuentra el método remove token en caso de que se requiera implementar un logout
  
  constructor() { }

  saveToken(token: string){
    localStorage.setItem("token", token);
  }

  getToken(){
    const token = localStorage.getItem("token");
    return token;
  }
  
  removeToken(){
    localStorage.removeItem("token");
  }
}

