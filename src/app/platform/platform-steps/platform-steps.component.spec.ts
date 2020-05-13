import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformStepsComponent } from './platform-steps.component';

describe('PlatformStepsComponent', () => {
  let component: PlatformStepsComponent;
  let fixture: ComponentFixture<PlatformStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
