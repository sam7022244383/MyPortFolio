import { TestBed } from '@angular/core/testing';

import { DateDiffCalculatorService } from './date-diff-calculator.service';

describe('DateDiffCalculatorService', () => {
  let service: DateDiffCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateDiffCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
