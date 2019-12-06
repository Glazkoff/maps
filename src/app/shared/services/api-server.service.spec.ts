import { TestBed } from '@angular/core/testing';

import { ApiServerService } from './api-server.service';

describe('ApiServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiServerService = TestBed.get(ApiServerService);
    expect(service).toBeTruthy();
  });
});
