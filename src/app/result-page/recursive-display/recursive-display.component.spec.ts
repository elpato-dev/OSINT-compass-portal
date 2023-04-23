import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveDisplayComponent } from './recursive-display.component';

describe('RecursiveDisplayComponent', () => {
  let component: RecursiveDisplayComponent;
  let fixture: ComponentFixture<RecursiveDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursiveDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecursiveDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
