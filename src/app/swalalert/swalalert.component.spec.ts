import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwalalertComponent } from './swalalert.component';

describe('SwalalertComponent', () => {
  let component: SwalalertComponent;
  let fixture: ComponentFixture<SwalalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwalalertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwalalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
