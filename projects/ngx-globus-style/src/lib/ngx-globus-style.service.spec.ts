import { TestBed, inject } from '@angular/core/testing';

import { NgxGlobusStyleService } from './ngx-globus-style.service';

describe('NgxGlobusStyleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxGlobusStyleService]
    });
  });

  it('should be created', inject([NgxGlobusStyleService], (service: NgxGlobusStyleService) => {
    expect(service).toBeTruthy();
  }));
});
