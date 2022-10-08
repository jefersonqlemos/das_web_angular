import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVisualizarProdutosPedidosComponent } from './dialog-visualizar-produtos-pedidos.component';

describe('DialogVisualizarProdutosPedidosComponent', () => {
  let component: DialogVisualizarProdutosPedidosComponent;
  let fixture: ComponentFixture<DialogVisualizarProdutosPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVisualizarProdutosPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogVisualizarProdutosPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
