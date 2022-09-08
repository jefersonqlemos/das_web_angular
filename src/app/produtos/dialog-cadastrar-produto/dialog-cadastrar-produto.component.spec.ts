import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCadastrarProdutoComponent } from './dialog-cadastrar-produto.component';

describe('DialogCadastrarProdutoComponent', () => {
  let component: DialogCadastrarProdutoComponent;
  let fixture: ComponentFixture<DialogCadastrarProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCadastrarProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCadastrarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
