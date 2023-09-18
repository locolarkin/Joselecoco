import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskGComponent } from './task-g.component';

describe('TaskGComponent', () => {
  let component: TaskGComponent;
  let fixture: ComponentFixture<TaskGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskGComponent]
    });
    fixture = TestBed.createComponent(TaskGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
