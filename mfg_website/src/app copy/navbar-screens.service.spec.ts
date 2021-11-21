import { TestBed } from '@angular/core/testing';

import { NavbarScreensService } from './navbar-screens.service';

describe('NavbarScreensService', () => {
  let service: NavbarScreensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarScreensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
