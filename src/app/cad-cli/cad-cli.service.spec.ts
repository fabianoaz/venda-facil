import { TestBed, inject } from '@angular/core/testing';

import { CadCliService } from './cad-cli.service';

describe('CadCliService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadCliService]
    });
  });

  it('should ...', inject([CadCliService], (service: CadCliService) => {
    expect(service).toBeTruthy();
  }));
});
