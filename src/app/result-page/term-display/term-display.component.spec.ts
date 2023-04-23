import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermDisplayComponent } from './term-display.component';

describe('ResultPageComponent', () => {
  let component: TermDisplayComponent;
  let fixture: ComponentFixture<TermDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
