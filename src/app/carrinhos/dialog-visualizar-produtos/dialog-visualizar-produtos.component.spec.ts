import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVisualizarProdutosComponent } from './dialog-visualizar-produtos.component';

describe('DialogVisualizarProdutosComponent', () => {
  let component: DialogVisualizarProdutosComponent;
  let fixture: ComponentFixture<DialogVisualizarProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVisualizarProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogVisualizarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
