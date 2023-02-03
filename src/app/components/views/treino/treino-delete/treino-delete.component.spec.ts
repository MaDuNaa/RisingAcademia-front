import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoDeleteComponent } from './treino-delete.component';

describe('TreinoDeleteComponent', () => {
  let component: TreinoDeleteComponent;
  let fixture: ComponentFixture<TreinoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinoDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
