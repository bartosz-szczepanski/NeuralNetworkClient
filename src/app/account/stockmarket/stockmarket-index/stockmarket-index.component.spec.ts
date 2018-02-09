import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockmarketIndexComponent } from './stockmarket-index.component';

describe('StockmarketIndexComponent', () => {
  let component: StockmarketIndexComponent;
  let fixture: ComponentFixture<StockmarketIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockmarketIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockmarketIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
