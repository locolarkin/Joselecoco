import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariodeRegistroComponent } from './formulariode-registro.component';

describe('FormulariodeRegistroComponent', () => {
  let component: FormulariodeRegistroComponent;
  let fixture: ComponentFixture<FormulariodeRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulariodeRegistroComponent]
    });
    fixture = TestBed.createComponent(FormulariodeRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
