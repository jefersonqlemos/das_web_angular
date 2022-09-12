import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBuscarProdutoComponent } from './dialog-buscar-produto.component';

describe('DialogBuscarProdutoComponent', () => {
  let component: DialogBuscarProdutoComponent;
  let fixture: ComponentFixture<DialogBuscarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBuscarProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBuscarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
