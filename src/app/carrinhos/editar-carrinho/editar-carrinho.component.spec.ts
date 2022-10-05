import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCarrinhoComponent } from './editar-carrinho.component';

describe('EditarCarrinhoComponent', () => {
  let component: EditarCarrinhoComponent;
  let fixture: ComponentFixture<EditarCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCarrinhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
