import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { NouveauProduitComponent } from './nouveau-produit/nouveau-produit.component';
import { ProduitService } from './services/produit.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitsComponent,
    NouveauProduitComponent,
    EditProduitComponent,
    LoginComponent,
    AdminTemplateComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
    
  ],
  providers: [
    ProduitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
