import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRemoverCarrinhoComponent } from './dialog-remover-carrinho.component';

describe('DialogRemoverCarrinhoComponent', () => {
  let component: DialogRemoverCarrinhoComponent;
  let fixture: ComponentFixture<DialogRemoverCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRemoverCarrinhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogRemoverCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
