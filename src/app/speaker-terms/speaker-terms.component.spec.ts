import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerTermsComponent } from './speaker-terms.component';

describe('SpeakerTermsComponent', () => {
  let component: SpeakerTermsComponent;
  let fixture: ComponentFixture<SpeakerTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
