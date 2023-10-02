import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-nouveau-produit',
  templateUrl: './nouveau-produit.component.html',
  styleUrls: ['./nouveau-produit.component.css']
})
export class NouveauProduitComponent implements OnInit {
public produitForm!:FormGroup;


constructor (private fb:FormBuilder,
             private produitServices :ProduitService){


}

ngOnInit() {
  
this.produitForm=this.fb.group(
  
  { 
   
   nom:this.fb.control('',[Validators.required]),
   prix:this.fb.control(0),
   checked:this.fb.control(false),

});


}
saveProduit(){
  let produit:Produit=this.produitForm.value;
  this.produitServices.saveProduit(produit).subscribe({
    next:data=>{
alert(JSON.stringify(data));
    },error: err=>{
      console.log(err);
    }
  })
}
}
