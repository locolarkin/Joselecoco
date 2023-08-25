import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcComponent } from './wc.component';

describe('WcComponent', () => {
  let component: WcComponent;
  let fixture: ComponentFixture<WcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WcComponent]
    });
    fixture = TestBed.createComponent(WcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
