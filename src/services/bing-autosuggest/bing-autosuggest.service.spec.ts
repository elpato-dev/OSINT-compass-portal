import { TestBed } from '@angular/core/testing';

import { BingAutosuggestService } from './bing-autosuggest.service';

describe('BingAutosuggestService', () => {
  let service: BingAutosuggestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BingAutosuggestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
