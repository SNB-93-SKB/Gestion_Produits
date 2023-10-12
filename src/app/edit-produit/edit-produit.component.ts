import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { min } from 'rxjs';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
produitId! :number;
produitFormGroup!: FormGroup

  constructor(private  activatedRoute :ActivatedRoute
    ,private produitService: ProduitService,
    private fb: FormBuilder){


  }
  ngOnInit() {
    
    this.produitId=this.activatedRoute.snapshot.params['id'];
    this.produitService.getProduitById(this.produitId).subscribe({
    next: (produit)=>{
  this.produitFormGroup=this.fb.group({
    id:this.fb.control(produit.id),
    nom:this.fb.control(produit.nom,Validators.required),
    prix:this.fb.control(produit.prix,[Validators.min(200)]),
    cheched:this.fb.control(produit.checked)
  })
  
},
error: err=>{
  console.log(err);
}
    });
  }
  updateProduit(){

    let produit:Produit=this.produitFormGroup.value;
this.produitService.updateProduit(produit).subscribe({
  next:data=>{
    alert(JSON.stringify(data))
  }
})
    
  }
}
