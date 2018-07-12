import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesFuncionaisComponent } from './classes-funcionais.component';

describe('ClassesFuncionaisComponent', () => {
  let component: ClassesFuncionaisComponent;
  let fixture: ComponentFixture<ClassesFuncionaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesFuncionaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesFuncionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
