import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoReadComponent } from './aluno-read.component';

describe('AlunoReadComponent', () => {
  let component: AlunoReadComponent;
  let fixture: ComponentFixture<AlunoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
