import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { NouveauProduitComponent } from './nouveau-produit/nouveau-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { authencationGuard } from './guards/authencation.guard';
import { authorizationGuar } from './guards/authorization.guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

const routes: Routes = [
  {path:"admin", component:AdminTemplateComponent,canActivate:[authencationGuard], children :[
    {path:"produits", component: ProduitsComponent},
    {path:"nouveau-produit", component:NouveauProduitComponent,canActivate:[authorizationGuar],
    data:{requiredRoles:'ADMIN'}},
    {path:"editProduit/:id", component: EditProduitComponent, canActivate:[authorizationGuar],
  data:{requiredRoles:'ADMIN'}},
    {path:"home", component: HomeComponent},
    {path:"notAuthorized", component:NotAuthorizedComponent}
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
