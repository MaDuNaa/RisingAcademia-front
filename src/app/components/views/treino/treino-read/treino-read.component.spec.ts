import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoReadComponent } from './treino-read.component';

describe('TreinoReadComponent', () => {
  let component: TreinoReadComponent;
  let fixture: ComponentFixture<TreinoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinoReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
