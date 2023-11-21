import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AppStateService } from './app-state.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private appState: AppStateService) { 

  }
  async login(username:string, password:string):Promise<any>{


let user:any=await firstValueFrom( this.http.get("http://localhost:8080/users/"+username));
//cette partie ne se fait pas en front end
console.log(password);
console.log(user.password);
console.log(atob(user.password));
 if(password==atob(user.password)){
  let decodedjwt:any= jwtDecode(user.token);
  this.appState.setAuthState({
    isAuthenticated:true,
  username:decodedjwt.sub,
  roles:decodedjwt.roles,
  token:user.token
  });
  return Promise.resolve(true);
 }else{
  return Promise.reject("Password Or UserName incorrect");
 }

}

}
