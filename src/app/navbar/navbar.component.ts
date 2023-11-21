import { Component } from '@angular/core';
import { AppStateService } from '../services/app-state.service';
import { LoadingService } from '../services/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  actions: Array<any>=[

    {title:"Home" ,"route":"/admin/home",icons:"house"},
    {title:"Produits", "route": "/admin/produits", icons:"list"},
    {title:"Nouveaux Produits", "route":"/admin/nouveau-produit", icons:"safe"}
  ];
  currentAction:any;
  constructor( public appState:AppStateService,
    public loadingService:LoadingService,
    private router:Router){

  }

  setCurrentAction(action:any){
this.currentAction=action;
  }
  Logout(){
this.appState.authState={};
this.router.navigateByUrl("/login");
  }
  login( ){
this.router.navigateByUrl("/login")
  }
}
