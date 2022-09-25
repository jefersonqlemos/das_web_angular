import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTransformarPedidoComponent } from './dialog-transformar-pedido.component';

describe('DialogTransformarPedidoComponent', () => {
  let component: DialogTransformarPedidoComponent;
  let fixture: ComponentFixture<DialogTransformarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTransformarPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTransformarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
