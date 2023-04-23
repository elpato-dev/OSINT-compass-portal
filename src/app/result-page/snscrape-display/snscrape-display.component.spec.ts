import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnscrapeDisplayComponent } from './snscrape-display.component';

describe('SnscrapeDisplayComponent', () => {
  let component: SnscrapeDisplayComponent;
  let fixture: ComponentFixture<SnscrapeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnscrapeDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnscrapeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
