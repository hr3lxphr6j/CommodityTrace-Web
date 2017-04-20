import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  productId?: number;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  onClick() {
    this.productService.getProduct(this.productId).subscribe(() => {
      this.router.navigate(['product', this.productId]);
    }, () => {
      alert('ID: ' + this.productId + ' 不存在的');
    });
  }

  ngOnInit() {
  }

}
