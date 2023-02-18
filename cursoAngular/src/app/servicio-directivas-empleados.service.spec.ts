import { TestBed } from '@angular/core/testing';

import { ServicioDirectivasEmpleadosService } from './servicio-directivas-empleados.service';

describe('ServicioDirectivasEmpleadosService', () => {
  let service: ServicioDirectivasEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDirectivasEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
