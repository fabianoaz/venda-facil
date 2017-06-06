import { TestBed, inject } from '@angular/core/testing';

import { CadUserService } from './cad-user.service';

describe('CadUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadUserService]
    });
  });

  it('should ...', inject([CadUserService], (service: CadUserService) => {
    expect(service).toBeTruthy();
  }));
});
