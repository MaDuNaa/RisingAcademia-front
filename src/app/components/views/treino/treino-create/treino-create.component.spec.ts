import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoCreateComponent } from './treino-create.component';

describe('TreinoCreateComponent', () => {
  let component: TreinoCreateComponent;
  let fixture: ComponentFixture<TreinoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
