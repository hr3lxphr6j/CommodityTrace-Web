import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  user: User;
  private baseUrl = 'http://127.0.0.1:8080/api/v1/user';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  login(name: string, pwd: string) {
    this.headers.append('Authorization', 'Basic ' + btoa(name + ':' + pwd));
    this.http.post(this.baseUrl + 'login', null, {headers: this.headers}).map(res => res.json());
  }
}
export class User {
  constructor(public id?: number,
              public name?: string,
              public pwd?: string,
              public phone?: string,
              public email?: string) {
  }
}
