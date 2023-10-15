import { HttpClient} from '@angular/common/http';
import { Component,OnInit, numberAttribute} from '@angular/core';
import { Observable } from 'rxjs';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { Route, Router } from '@angular/router';
import { AppStateService } from '../services/app-state.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit{

  constructor(private produitService:ProduitService,
    private router:Router, public appState:AppStateService){


  }
  ngOnInit() {
  this.searchProduits();
    
    
  }
  searchProduits(){ 
  this.appState.setProduitState({
    status:"LOADING"
  });
this.produitService.searchProduits(
  this.appState.produitsState.kw,
  //this.appState.produitsState.kw ,
  this.appState.produitsState.currentPage, 
  this.appState.produitsState.pageSize)
.subscribe({
  next : (resp)=> {
    let produits = resp.body as Produit[];
    let totalProduits:number=parseInt(resp.headers.get('x-total-count')!);
    //this.appState.produitsState.totalProduits=totalProduits;
    let totalPage =
     Math.floor(totalProduits / this.appState.produitsState.pageSize);
    if(totalProduits % this.appState.produitsState.pageSize !=0){
      ++totalPage;
    }
    this.appState.setProduitState({
produits:produits,
totalPage:totalPage,
totalProduits:totalProduits,
status:"LOADED"
    })
  },
  error : err=>{
this.appState.setProduitState({
  status:"ERROR",
  errorMessage:err,
})

  }
})

//this.produits=this.produitServices.getProduits();
}



  handleCheckProduit(produit:Produit){
    this.produitService.checkProduit(produit)
    .subscribe({
next:updatedProduit=>{
produit.checked=!produit.checked; 
//this.getProduits();
}
    })
  
}
handleDelete(produit:Produit){
  if(confirm("Este vous sure de vouloire supprimer"))
      this.produitService.deleteProduit(produit).
      subscribe({
next:value=>{
  //this.getProduits(); //(cette methode supprime au niveau du back-end)
  //this.appState.produitsState.produits= this.appState.produitsState.produits.filter((p:any)
  //=>p.id!=produit.id) //cette methode supprime au niveau du front end 
  this.searchProduits();
}
      })
}
handelGoToPage(page:number){
  this.appState.produitsState.currentPage=page;
  this.searchProduits();
  }
  handleEdite(produit: Produit){
  this.router.navigateByUrl(`/editProduit/${produit.id}`);
   

  }
}