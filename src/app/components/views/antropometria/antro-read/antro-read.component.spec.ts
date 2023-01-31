import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntroReadComponent } from './antro-read.component';

describe('AntroReadComponent', () => {
  let component: AntroReadComponent;
  let fixture: ComponentFixture<AntroReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntroReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntroReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
