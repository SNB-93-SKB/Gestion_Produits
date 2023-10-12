import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }


  public searchProduits(kw:string="",page :number, size :number){

    return this.http.get(
      `http://localhost:8080/produits?nom_like=${kw}&_page=${page}&_limit=${size}`
      ,{ observe:'response'});
  }
  public checkProduit(produit:Produit):Observable<Produit>{

    return  this.http.patch<Produit>(`http://localhost:8080/produits/${produit.id}`,
    {checked:!produit.checked});
  }

  public deleteProduit(produit:Produit){

    return  this.http.delete<any>(`http://localhost:8080/produits/${produit.id}`);
  }
  saveProduit(produit:Produit):Observable<Produit>{

    return  this.http.post<Produit>(`http://localhost:8080/produits`, produit);
  }
  getProduitById(produitId:number):Observable<Produit>{
return this.http.get<Produit>(`http://localhost:8080/produits/${produitId}`);
  }
  updateProduit(produit:Produit):Observable<Produit>{
    return this.http.put<Produit>(`http://localhost:8080/produits/${produit.id}`,produit );
  }
}
