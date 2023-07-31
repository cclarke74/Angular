import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildViewComponent } from './child-view.component';

describe('ChildViewComponent', () => {
  let component: ChildViewComponent;
  let fixture: ComponentFixture<ChildViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildViewComponent]
    });
    fixture = TestBed.createComponent(ChildViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
