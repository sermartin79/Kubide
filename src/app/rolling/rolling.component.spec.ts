import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollingComponent } from './rolling.component';

describe('RollingComponent', () => {
  let component: RollingComponent;
  let fixture: ComponentFixture<RollingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
