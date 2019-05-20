import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TRIALComponent } from './trial.component';

describe('TRIALComponent', () => {
  let component: TRIALComponent;
  let fixture: ComponentFixture<TRIALComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TRIALComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TRIALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
