import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Complaint, Product, ProductService} from '../shared/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private productId: number;
  private product: Product;
  private complaints: Complaint[];
  private formModel: FormGroup;
  formShow = false;

  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      content: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formModel.valid && this.formModel.get('phone').value !== '' && this.formModel.get('content').value !== '') {
      this.complaints.push(new Complaint(
        -1,
        this.formModel.get('phone').value,
        this.formModel.get('content').value
      ));
      this.productService.addComplaint(this.product.id, this.formModel.value);
      this.formModel.get('phone');
      alert('投诉成功');
    } else {
      alert('请认真填写');
    }
  }


  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => {
      this.productId = params['prodId'];
      this.productService.getProduct(this.productId).subscribe(
        product => this.product = product
      );
      this.productService.getComplaints(this.productId).subscribe(
        complaints => this.complaints = complaints
      );
    });
  }
}
