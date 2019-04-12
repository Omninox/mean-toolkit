import { TestBed } from '@angular/core/testing';

import { CodegenService } from './codegen.service';

describe('CodegenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodegenService = TestBed.get(CodegenService);
    expect(service).toBeTruthy();
  });
});
