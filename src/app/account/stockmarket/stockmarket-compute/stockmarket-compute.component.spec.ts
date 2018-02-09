import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockmarketComputeComponent } from './stockmarket-compute.component';

describe('StockmarketComputeComponent', () => {
  let component: StockmarketComputeComponent;
  let fixture: ComponentFixture<StockmarketComputeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockmarketComputeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockmarketComputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
