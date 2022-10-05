import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExcluirCarrinhoComponent } from './dialog-excluir-carrinho.component';

describe('DialogExcluirCarrinhoComponent', () => {
  let component: DialogExcluirCarrinhoComponent;
  let fixture: ComponentFixture<DialogExcluirCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogExcluirCarrinhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogExcluirCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
