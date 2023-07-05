import {  Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor (
    private loginService: LoginService,  private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
      if (this.loginService.logado()) {
        const allowedRoles = route.data['allowedRoles'];
        const userRole = this.loginService.getRole();
        if (allowedRoles && allowedRoles.indexOf(userRole) === -1) {
          return false;
        }

        return true;
      }

      this.router.navigate(['login']);
      return false;
  }
}
