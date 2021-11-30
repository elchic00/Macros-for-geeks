import { TestBed } from '@angular/core/testing';

import { SearchfoodsService } from './searchfoods.service';

describe('SearchfoodsService', () => {
  let service: SearchfoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchfoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
