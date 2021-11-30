import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodinputComponent } from './foodinput.component';

describe('FoodinputComponent', () => {
  let component: FoodinputComponent;
  let fixture: ComponentFixture<FoodinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
