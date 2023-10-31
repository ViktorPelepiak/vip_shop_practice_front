import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtNotificationComponent } from './debt-notification.component';

describe('DebtNotificationComponent', () => {
  let component: DebtNotificationComponent;
  let fixture: ComponentFixture<DebtNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebtNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebtNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
