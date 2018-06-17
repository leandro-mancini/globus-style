import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComecandoComponent } from './comecando.component';

describe('ComecandoComponent', () => {
  let component: ComecandoComponent;
  let fixture: ComponentFixture<ComecandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComecandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComecandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
