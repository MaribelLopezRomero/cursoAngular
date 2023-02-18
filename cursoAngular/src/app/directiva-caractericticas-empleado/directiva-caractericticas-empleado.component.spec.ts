import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaCaractericticasEmpleadoComponent } from './directiva-caractericticas-empleado.component';

describe('DirectivaCaractericticasEmpleadoComponent', () => {
  let component: DirectivaCaractericticasEmpleadoComponent;
  let fixture: ComponentFixture<DirectivaCaractericticasEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaCaractericticasEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivaCaractericticasEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
