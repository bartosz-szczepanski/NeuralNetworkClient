import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouletteIndexComponent } from './roulette-index.component';

describe('RouletteIndexComponent', () => {
  let component: RouletteIndexComponent;
  let fixture: ComponentFixture<RouletteIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouletteIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouletteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
