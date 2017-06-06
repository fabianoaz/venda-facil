import { TestBed, inject } from '@angular/core/testing';

import { CadEstabService } from './cad-estab.service';

describe('CadEstabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadEstabService]
    });
  });

  it('should ...', inject([CadEstabService], (service: CadEstabService) => {
    expect(service).toBeTruthy();
  }));
});
