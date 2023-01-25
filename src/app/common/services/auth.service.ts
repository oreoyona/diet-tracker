import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login = (value: Object): Observable<Object> => {
    return this.http.post('/api/auth', value)
}

  constructor(private http: HttpClient) { }
}
