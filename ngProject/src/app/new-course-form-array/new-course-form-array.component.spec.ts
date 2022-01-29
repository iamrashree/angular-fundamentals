import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseFormArrayComponent } from './new-course-form-array.component';

describe('NewCourseFormArrayComponent', () => {
  let component: NewCourseFormArrayComponent;
  let fixture: ComponentFixture<NewCourseFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCourseFormArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
