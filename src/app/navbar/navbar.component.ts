import { Component } from '@angular/core';
import { AppStateService } from '../services/app-state.service';
import { LoadingService } from '../services/loading.service';

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
    public loadingService:LoadingService){

  }

  setCurrentAction(action:any){
this.currentAction=action;
  }
}
