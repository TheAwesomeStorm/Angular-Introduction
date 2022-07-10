import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service'

@Injectable({
  providedIn: 'root'
})
export class RedirectIfLoggedGuard implements CanActivate {

  constructor (private userService: UserService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userService.isLogged()) {
      this.router.navigate(['user', this.userService.getUserName()]).then()
      return false
    }
    return true
  }

}