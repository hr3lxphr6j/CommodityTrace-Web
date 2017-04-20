import {CanActivate} from '@angular/router';
import {UserService} from '../shared/user.service';
import {Injectable} from '@angular/core';
@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private userService: UserService) {
  }

  canActivate() {
    return this.userService.user != null;
  }

}
