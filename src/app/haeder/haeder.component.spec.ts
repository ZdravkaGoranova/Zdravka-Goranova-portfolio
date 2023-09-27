import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaederComponent } from './haeder.component';

describe('HaederComponent', () => {
  let component: HaederComponent;
  let fixture: ComponentFixture<HaederComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HaederComponent]
    });
    fixture = TestBed.createComponent(HaederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
