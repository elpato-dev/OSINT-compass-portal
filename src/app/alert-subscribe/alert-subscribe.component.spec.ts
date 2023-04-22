import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSubscribeComponent } from './alert-subscribe.component';

describe('AlertSubscribeComponent', () => {
  let component: AlertSubscribeComponent;
  let fixture: ComponentFixture<AlertSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertSubscribeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
