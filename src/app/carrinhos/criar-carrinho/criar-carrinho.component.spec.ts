import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCarrinhoComponent } from './criar-carrinho.component';

describe('CriarCarrinhoComponent', () => {
  let component: CriarCarrinhoComponent;
  let fixture: ComponentFixture<CriarCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCarrinhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
