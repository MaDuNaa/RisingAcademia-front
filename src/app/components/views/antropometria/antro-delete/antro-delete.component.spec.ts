import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntroDeleteComponent } from './antro-delete.component';

describe('AntroDeleteComponent', () => {
  let component: AntroDeleteComponent;
  let fixture: ComponentFixture<AntroDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntroDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntroDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
