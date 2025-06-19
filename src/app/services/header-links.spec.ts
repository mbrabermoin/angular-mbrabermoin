import { TestBed } from '@angular/core/testing';

import { HeaderLinksService } from './header-links';

describe('HeaderLinksService', () => {
  let service: HeaderLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
