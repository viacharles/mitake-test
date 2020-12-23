import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholdersMeetingComponent } from './shareholders-meeting.component';

describe('ShareholdersMeetingComponent', () => {
  let component: ShareholdersMeetingComponent;
  let fixture: ComponentFixture<ShareholdersMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareholdersMeetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareholdersMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
