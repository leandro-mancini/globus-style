import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoresTemaComponent } from './cores-tema.component';

describe('CoresTemaComponent', () => {
  let component: CoresTemaComponent;
  let fixture: ComponentFixture<CoresTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoresTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoresTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
