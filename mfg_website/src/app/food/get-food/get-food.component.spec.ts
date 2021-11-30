import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFoodComponent } from './get-food.component';

describe('GetFoodComponent', () => {
  let component: GetFoodComponent;
  let fixture: ComponentFixture<GetFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
