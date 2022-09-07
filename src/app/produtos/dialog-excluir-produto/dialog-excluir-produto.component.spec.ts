import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExcluirProdutoComponent } from './dialog-excluir-produto.component';

describe('DialogExcluirProdutoComponent', () => {
  let component: DialogExcluirProdutoComponent;
  let fixture: ComponentFixture<DialogExcluirProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogExcluirProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogExcluirProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
