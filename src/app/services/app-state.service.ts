import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public produitsState :any={
    
  produits:[],
  kw:"",
 totalPage:0,
 pageSize:4,
 currentPage:1,
 totalProduits:0,
 status:"",
 errorMessage:"",

 
  }

  constructor() { }


  public setProduitState(state:any):void{

this.produitsState={...this.produitsState,...state}
  }
}
