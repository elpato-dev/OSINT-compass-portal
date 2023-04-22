import { TestBed } from '@angular/core/testing';

import { CompassAPIService } from './compass-api.service';

describe('CompassAPIService', () => {
  let service: CompassAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompassAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
