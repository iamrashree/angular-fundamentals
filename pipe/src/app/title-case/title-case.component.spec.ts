import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCaseComponent } from './title-case.component';

describe('TitleCaseComponent', () => {
  let component: TitleCaseComponent;
  let fixture: ComponentFixture<TitleCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
