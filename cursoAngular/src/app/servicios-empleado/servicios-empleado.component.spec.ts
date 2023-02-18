import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosEmpleadoComponent } from './servicios-empleado.component';

describe('ServiciosEmpleadoComponent', () => {
  let component: ServiciosEmpleadoComponent;
  let fixture: ComponentFixture<ServiciosEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
