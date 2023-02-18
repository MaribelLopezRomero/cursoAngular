import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaEmpleadoHijoComponent } from './directiva-empleado-hijo.component';

describe('DirectivaEmpleadoHijoComponent', () => {
  let component: DirectivaEmpleadoHijoComponent;
  let fixture: ComponentFixture<DirectivaEmpleadoHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivaEmpleadoHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivaEmpleadoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
