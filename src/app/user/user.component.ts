import {Component, OnInit} from '@angular/core';
import {User} from '../shared/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private user: User;
  loginBtnFlag = false;
  private formModel: FormGroup;

  constructor() {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      name: ['', Validators.required],
      pwd: ['', Validators.required]
    });
  }

  onSubmit() {
  }

  ngOnInit() {
  }

}
