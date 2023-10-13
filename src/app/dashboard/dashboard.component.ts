import { Component } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(public appState: AppStateService){

}
totalCheckedProduit(){
  let checkProduits= 
  this.appState.produitsState.produits.filter((p:any)=>
  p.checked==true)
  return checkProduits.length;
}
}
