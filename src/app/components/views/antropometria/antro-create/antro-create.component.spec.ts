import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntroCreateComponent } from './antro-create.component';

describe('AntroCreateComponent', () => {
  let component: AntroCreateComponent;
  let fixture: ComponentFixture<AntroCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntroCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
