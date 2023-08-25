import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenmodelComponent } from './openmodel.component';

describe('OpenmodelComponent', () => {
  let component: OpenmodelComponent;
  let fixture: ComponentFixture<OpenmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
