import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Product} from './product.service';

@Injectable()
export class UserService {
  public user?: User;
  private baseUrl = 'http://127.0.0.1:8080/api/v1/user';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  login(name: string, pwd: string): Observable<User> {
    this.headers.append('Authorization', 'Basic ' + btoa(name + ':' + pwd));
    return this.http.post(this.baseUrl + '/login', null, {headers: this.headers}).map(res => res.json());
  }

  logout() {
    this.user = null;
    this.headers.delete('Authorization');
  }

  register(user: User): Observable<any> {
    return this.http.post(this.baseUrl, JSON.stringify(user), {headers: this.headers});
  }

  loadProducts(): Observable<Product[]> {
    return this.http.get(this.baseUrl + '/' + this.user.id + '/product', {headers: this.headers}).map(res => res.json());
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
