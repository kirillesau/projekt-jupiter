import { TestBed } from '@angular/core/testing';

import { TripStoreService } from './trip-store.service';

describe('TripStoreService', () => {
  let service: TripStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
