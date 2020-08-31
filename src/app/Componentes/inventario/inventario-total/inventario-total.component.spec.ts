import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioTotalComponent } from './inventario-total.component';

describe('InventarioTotalComponent', () => {
  let component: InventarioTotalComponent;
  let fixture: ComponentFixture<InventarioTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
