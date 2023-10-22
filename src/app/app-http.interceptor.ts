import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { AppStateService } from './services/app-state.service';
import { LoadingService } from './services/loading.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private appState:AppStateService,
    private loadingService:LoadingService) {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
 /*
    this.appState.setProduitState({
  status:"LOADING"
 })
 */
this.loadingService.showLoadingSpinner();
    let req=request.clone(
      {
        headers:request.headers.set("autorisation" , "Bearer JWT")
      }
    );
    
    
    return next.handle(req).pipe(
      finalize(()=>{
       // this.appState.setProduitState({
       //   status:"LOADING"
        // })
        this.loadingService.hiLoadingSpinner();
      })
    );
      
  }
}
