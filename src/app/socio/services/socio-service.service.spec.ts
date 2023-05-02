import { TestBed } from '@angular/core/testing';

import { SocioServiceService } from './socio-service.service';

describe('SocioServiceService', () => {
  let service: SocioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
