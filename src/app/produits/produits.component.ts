import { HttpClient} from '@angular/common/http';
import { Component,OnInit, numberAttribute} from '@angular/core';
import { Observable } from 'rxjs';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit{

 public produits : Array<Produit>=[];
public kw:string="";
totalPage: number=0;
pageSize: number=4;
currentPage: number=1;

  constructor(private produitService:ProduitService,
    private router:Router){


  }
  ngOnInit() {
  this.searchProduits();
    
    
  }
  searchProduits(){ 
  
this.produitService.searchProduits(this.kw ,this.currentPage, this.pageSize)
.subscribe({
  next : (resp)=> {
    this.produits = resp.body as Produit[];
    let totalProduits:number=parseInt(resp.headers.get('x-total-count')!);
    this.totalPage = Math.floor(totalProduits / this.pageSize);
    if(totalProduits % this.pageSize !=0){
      this.totalPage = this.totalPage+1;
    }
  },
  error : err=>{
console.log(err);

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
  this.produits= this.produits.filter(p=>p.id!=produit.id) //cette methode supprime au niveau du front end 
}
      })
}
handelGoToPage(page:number){
  this.currentPage=page;
  this.searchProduits();
  }
  handleEdite(produit: Produit){
  this.router.navigateByUrl(`/editProduit/${produit.id}`);
   

  }
}