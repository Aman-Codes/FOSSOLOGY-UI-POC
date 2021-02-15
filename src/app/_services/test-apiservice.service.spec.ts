import { TestBed } from '@angular/core/testing';

import { TestAPIServiceService } from './test-apiservice.service';

describe('TestAPIServiceService', () => {
  let service: TestAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
