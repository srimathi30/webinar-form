import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionOutlineComponent } from './session-outline.component';

describe('SessionOutlineComponent', () => {
  let component: SessionOutlineComponent;
  let fixture: ComponentFixture<SessionOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
