import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { NouveauProduitComponent } from './nouveau-produit/nouveau-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';

const routes: Routes = [
  {path:"admin", component:AdminTemplateComponent,children :[
    {path:"produits", component: ProduitsComponent},
    {path:"nouveau-produit", component:NouveauProduitComponent},
    {path:"editProduit/:id", component: EditProduitComponent},
    {path:"home", component: HomeComponent},
  ]

},
  {path:"login", component: LoginComponent},
 
 
  {path:"", redirectTo: "login", pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
