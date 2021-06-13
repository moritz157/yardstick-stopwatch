import { TestBed } from '@angular/core/testing';

import { YardstickService } from './yardstick.service';

describe('YardstickService', () => {
  let service: YardstickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YardstickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
