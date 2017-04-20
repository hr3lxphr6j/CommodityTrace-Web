import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/user.service';
import {Product} from '../shared/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private products: Product[];
  private formModel: FormGroup;

  constructor(public userService: UserService) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      name: ['', Validators.required],
      standard: ['', Validators.required],
      producingArea: ['', Validators.required],
      isgm: ['-2', Validators.required]
    });
  }

  onSubmit() {
    if (this.formModel.valid) {
      this.userService.addProduct({
        id: null,
        name: this.formModel.get('name').value,
        standard: this.formModel.get('standard').value,
        producingArea: this.formModel.get('producingArea').value,
        isgm: this.formModel.get('isgm').value,
      }).subscribe(() => {
        this.ngOnInit();
      }, () => {
        this.ngOnInit();
      }, () => {
        this.ngOnInit();
      });
    }
  }

  onDelete(id: number) {
    this.userService.delProduct(id).subscribe(() => {
      this.ngOnInit();
    }, () => {
      this.ngOnInit();
    }, () => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.userService.loadProducts().subscribe(products => {
      this.products = products;
    });
  }

}
