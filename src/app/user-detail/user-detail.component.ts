import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/user.service';
import {Product} from '../shared/product.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private products: Product[];

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.userService.loadProducts().subscribe(products => {
      this.products = products;
    });
  }

}
