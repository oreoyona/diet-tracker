import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Users } from '../classes/Users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login = (value: Object): Observable<Object> => {
    return this.http.post('/api/auth', value)
}

  isLoggedIn = false;

  isAuth(){
    return this.isLoggedIn;
  }

  //dumb data
  gloire = new Users('Gloire Chabu', 26, 'cortesgloire@gmail.com', false, 0, '71215918');
  userBase:[Users] = [this.gloire]

  constructor(private http: HttpClient) { }
}
