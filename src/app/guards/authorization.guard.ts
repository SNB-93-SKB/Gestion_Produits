import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppStateService } from '../services/app-state.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn:'root'
})

export class authorizationGuar implements CanActivate{
  constructor(private router :Router, 
    private appState:AppStateService){

  }
canActivate(
  route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  if(this.appState.authState.roles.includes(route.data['requiredRoles'])){
    return true
  }else{
    this.router.navigateByUrl("/admin/notAuthorized")
    return false;
  }
    
}

};
