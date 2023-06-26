import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAppComponentComponent } from './component-app-component.component';

describe('ComponentAppComponentComponent', () => {
  let component: ComponentAppComponentComponent;
  let fixture: ComponentFixture<ComponentAppComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentAppComponentComponent]
    });
    fixture = TestBed.createComponent(ComponentAppComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
