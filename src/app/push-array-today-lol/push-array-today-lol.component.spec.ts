import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushArrayTodayLolComponent } from './push-array-today-lol.component';

describe('PushArrayTodayLolComponent', () => {
  let component: PushArrayTodayLolComponent;
  let fixture: ComponentFixture<PushArrayTodayLolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushArrayTodayLolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushArrayTodayLolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
