import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouletteResultComponent } from './roulette-result.component';

describe('RouletteResultComponent', () => {
  let component: RouletteResultComponent;
  let fixture: ComponentFixture<RouletteResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouletteResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouletteResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
