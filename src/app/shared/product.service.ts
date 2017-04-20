import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private url = 'http://localhost:8080/api/v1/product';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  /**
   * 获取所有商品信息
   * @returns {Observable<R>}
   */
  getProducts(): Observable<Product[]> {
    return this.http.get(this.url).map(res => res.json());
  }

  /**
   * 根据ID获取单个商品信息
   * @param id
   * @returns {Observable<R>}
   */
  getProduct(id: number): Observable<Product> {
    return this.http.get(this.url + '/' + id).map(res => res.json());
  }

  /**
   * 根据商品ID获得所有投诉信息
   * @param id
   * @returns {Observable<R>}
   */
  getComplaints(id: number): Observable<Complaint[]> {
    return this.http.get(this.url + '/' + id + '/complaint').map(res => res.json());
  }

  /**
   * 增加评论
   * @param id
   * @param complaint
   */
  addComplaint(id: number, complaint: any) {
    this.http
      .post(this.url + '/' + id + '/complaint', JSON.stringify(complaint), {headers: this.headers})
      .subscribe();
  }
}

export class Product {
  constructor(public id: number,
              public name: string,
              public standard: string,
              public producingArea: string,
              public isgm: number) {

  }
}
export class Complaint {
  constructor(public id: number,
              public phone: number,
              public content: string) {
  }
}
