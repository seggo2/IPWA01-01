import { TestBed } from '@angular/core/testing';

import { Co2CalculatorService } from './co2-calculator.service';

describe('Co2CalculatorService', () => {
  let service: Co2CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Co2CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
