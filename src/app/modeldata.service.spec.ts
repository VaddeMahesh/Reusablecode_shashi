import { TestBed } from '@angular/core/testing';

import { ModeldataService } from './modeldata.service';

describe('ModeldataService', () => {
  let service: ModeldataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeldataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
