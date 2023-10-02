import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actions: Array<any>=[

    {title:"Home" ,"route":"/home",icons:"house"},
    {title:"Produits", "route": "/produits", icons:"list"},
    {title:"Nouveaux Produits", "route":"/nouveau-produit", icons:"safe"}
  ];
  currentAction:any;

  setCurrentAction(action:any){
this.currentAction=action;
  }
}
