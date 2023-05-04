import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntroDetalheComponent } from './antro-detalhe.component';

describe('AntroDetalheComponent', () => {
  let component: AntroDetalheComponent;
  let fixture: ComponentFixture<AntroDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntroDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntroDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
