import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;

  constructor() {
  }

  ngOnInit() {
    this.products = [
      new Product(1, '蛇皮白菜', '未知', '农村', '0512', 0),
      new Product(2, '蛇皮土豆', '未知', '农村', '0512', 0),
      new Product(3, '蛇皮地瓜', '未知', '农村', '0512', 0),
      new Product(4, '蛇皮酸菜', '未知', '农村', '0512', 0),
      new Product(5, '香蕉牛奶', '未知', '农村', '0512', 0),
      new Product(6, '终极鱿鱼', '未知', '农村', '0512', 0)
    ];
  }

}


export class Product {
  constructor(public id: number,
              public name: string,
              public standard: string,
              public producingArea: string,
              public user: string,
              public isGM: number) {

  }
}
