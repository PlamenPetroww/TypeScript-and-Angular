import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNavigateComponent } from './input-navigate.component';

describe('InputNavigateComponent', () => {
  let component: InputNavigateComponent;
  let fixture: ComponentFixture<InputNavigateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputNavigateComponent]
    });
    fixture = TestBed.createComponent(InputNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
