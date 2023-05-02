import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoCreateGeralComponent } from './treino-create-geral.component';

describe('TreinoCreateGeralComponent', () => {
  let component: TreinoCreateGeralComponent;
  let fixture: ComponentFixture<TreinoCreateGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinoCreateGeralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinoCreateGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
