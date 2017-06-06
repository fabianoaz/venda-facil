import { TestBed, inject } from '@angular/core/testing';

import { CadProdService } from './cad-prod.service';

describe('CadProdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadProdService]
    });
  });

  it('should ...', inject([CadProdService], (service: CadProdService) => {
    expect(service).toBeTruthy();
  }));
});
