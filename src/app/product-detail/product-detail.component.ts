import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Complaint, Product, ProductService} from '../shared/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private product: Product;
  private complaints: Complaint[];
  formModel: FormGroup;

  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      content: ['', Validators.minLength(5)],
      phone: ['', Validators.minLength(6)]
    });
  }

  onSubmit() {
    if (this.formModel.valid) {
      this.complaints.push(new Complaint(
        -1,
        this.formModel.get('content').value,
        this.formModel.get('phone').value
      ));
      this.productService.addComplaint(this.product.id, this.formModel.value);
      alert('投诉成功');
    }
  }


  ngOnInit() {
    const productId: number = this.routeInfo.snapshot.params['prodId'];
    this.productService.getProduct(productId).subscribe(
      product => this.product = product
    );
    this.productService.getComplaints(productId).subscribe(
      complaints => this.complaints = complaints
    );
  }
}
