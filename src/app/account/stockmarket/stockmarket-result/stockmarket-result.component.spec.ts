import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockmarketResultComponent } from './stockmarket-result.component';

describe('StockmarketResultComponent', () => {
  let component: StockmarketResultComponent;
  let fixture: ComponentFixture<StockmarketResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockmarketResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockmarketResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
