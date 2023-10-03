import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { NouveauProduitComponent } from './nouveau-produit/nouveau-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"produits", component: ProduitsComponent},
  {path:"nouveau-produit", component:NouveauProduitComponent},
  {path:"editProduit/:id", component: EditProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
