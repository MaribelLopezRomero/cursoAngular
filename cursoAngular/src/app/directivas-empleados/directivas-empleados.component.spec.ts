import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasEmpleadosComponent } from './directivas-empleados.component';

describe('DirectivasEmpleadosComponent', () => {
  let component: DirectivasEmpleadosComponent;
  let fixture: ComponentFixture<DirectivasEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivasEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivasEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
