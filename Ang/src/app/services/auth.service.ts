import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  registerUser(user) {
    const currentUser = {name: user.name, surname: user.surname, login: user.login, email: user.email, password: user.password};
    return this.http.post('http://localhost:3000/api/user/', currentUser);
  }

  loginUser(user) {
    const currentUser = {login: user.login, password: user.password};
    return this.http.post('http://localhost:3000/api/auth/user', currentUser);
  }
}

