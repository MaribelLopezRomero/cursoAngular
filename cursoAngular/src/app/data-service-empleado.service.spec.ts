import { TestBed } from '@angular/core/testing';

import { DataServiceEmpleadoService } from './data-service-empleado.service';

describe('DataServiceEmpleadoService', () => {
  let service: DataServiceEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServiceEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
