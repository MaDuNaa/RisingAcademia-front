import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntroUpdateComponent } from './antro-update.component';

describe('AntroUpdateComponent', () => {
  let component: AntroUpdateComponent;
  let fixture: ComponentFixture<AntroUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntroUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntroUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
