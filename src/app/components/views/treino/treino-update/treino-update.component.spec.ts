import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoUpdateComponent } from './treino-update.component';

describe('TreinoUpdateComponent', () => {
  let component: TreinoUpdateComponent;
  let fixture: ComponentFixture<TreinoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinoUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
