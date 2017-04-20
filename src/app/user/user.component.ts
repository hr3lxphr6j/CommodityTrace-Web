import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../shared/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loginBtnFlag = false;
  private formModel: FormGroup;
  canClose = false;
  @ViewChild('closeBtn') closeBtn: ElementRef;

  constructor(public userService: UserService,
              private router: Router) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      name: ['', Validators.required],
      pwd: ['', Validators.required]
    });
  }

  onLogout() {
    this.userService.logout();
    alert('注销成功');
    this.router.navigate(['']);
  }

  onSubmit() {
    if (this.formModel.valid) {
      if (this.loginBtnFlag) {// 处理登陆逻辑
        this.userService.login(
          this.formModel.get('name').value,
          this.formModel.get('pwd').value)
          .subscribe(user => {
            this.userService.user = user;
            this.closeBtn.nativeElement.click();
            this.formModel.get('name').reset('');
            this.formModel.get('pwd').reset('');
          }, () => {
            this.userService.logout();
            alert('用户名或密码错误');
            this.formModel.get('name').reset('');
            this.formModel.get('pwd').reset('');
          });
      } else {// 处理注册逻辑
        this.userService.register({
          name: this.formModel.get('name').value,
          pwd: this.formModel.get('pwd').value
        }).subscribe(() => {
          this.closeBtn.nativeElement.click();
        }, () => {
          alert('用户名重复');
        });
      }
    }
  }

  ngOnInit() {
  }

}
