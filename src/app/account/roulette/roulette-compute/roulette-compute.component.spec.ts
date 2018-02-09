import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouletteComputeComponent } from './roulette-compute.component';

describe('RouletteComputeComponent', () => {
  let component: RouletteComputeComponent;
  let fixture: ComponentFixture<RouletteComputeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouletteComputeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouletteComputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
