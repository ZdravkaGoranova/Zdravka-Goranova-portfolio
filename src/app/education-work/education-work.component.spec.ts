import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationWorkComponent } from './education-work.component';

describe('EducationWorkComponent', () => {
  let component: EducationWorkComponent;
  let fixture: ComponentFixture<EducationWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationWorkComponent]
    });
    fixture = TestBed.createComponent(EducationWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
