import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGlobusStyleComponent } from './ngx-globus-style.component';

describe('NgxGlobusStyleComponent', () => {
  let component: NgxGlobusStyleComponent;
  let fixture: ComponentFixture<NgxGlobusStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGlobusStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGlobusStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
