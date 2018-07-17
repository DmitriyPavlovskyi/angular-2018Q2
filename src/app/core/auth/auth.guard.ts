import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(private service: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
       console.log('---can activate triggered');
       const isAuthenticated = this.service.isAuthenticated();

       if (!isAuthenticated) {
         this.router.navigate(['login']);
       }

       return isAuthenticated;
     }
}