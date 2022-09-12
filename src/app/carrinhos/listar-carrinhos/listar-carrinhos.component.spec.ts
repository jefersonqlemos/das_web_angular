import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCarrinhosComponent } from './listar-carrinhos.component';

describe('ListarCarrinhosComponent', () => {
  let component: ListarCarrinhosComponent;
  let fixture: ComponentFixture<ListarCarrinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCarrinhosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCarrinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
