import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariodeConsultaComponent } from './formulariode-consulta.component';

describe('FormulariodeConsultaComponent', () => {
  let component: FormulariodeConsultaComponent;
  let fixture: ComponentFixture<FormulariodeConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulariodeConsultaComponent]
    });
    fixture = TestBed.createComponent(FormulariodeConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
