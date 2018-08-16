import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '@app/core/auth/auth.service';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(private service: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
       console.log('---can activate triggered');
       return this.service.isAuthenticated().do((isLogin: boolean) => {
        if (!isLogin) {
          this.router.navigate(['login']);
        }
       });
     }
}
