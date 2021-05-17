import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CALCULADORAComponent } from './calculadora.component';

describe('CALCULADORAComponent', () => {
  let component: CALCULADORAComponent;
  let fixture: ComponentFixture<CALCULADORAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CALCULADORAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CALCULADORAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
