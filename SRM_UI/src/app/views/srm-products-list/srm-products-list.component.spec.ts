import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrmProductsListComponent } from './srm-products-list.component';

describe('SrmProductsListComponent', () => {
  let component: SrmProductsListComponent;
  let fixture: ComponentFixture<SrmProductsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrmProductsListComponent]
    });
    fixture = TestBed.createComponent(SrmProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
