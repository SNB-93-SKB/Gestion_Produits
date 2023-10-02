import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauProduitComponent } from './nouveau-produit.component';

describe('NouveauProduitComponent', () =>{
  let component: NouveauProduitComponent;
  let fixture: ComponentFixture<NouveauProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouveauProduitComponent]
    });
    fixture = TestBed.createComponent(NouveauProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
