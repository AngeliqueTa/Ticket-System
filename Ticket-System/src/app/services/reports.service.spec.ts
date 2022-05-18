import { TestBed } from '@angular/core/testing';

import { REportsService } from './reports.service';

describe('REportsService', () => {
  let service: REportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(REportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
