import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockmarketStorageComponent } from './stockmarket-storage.component';

describe('StockmarketStorageComponent', () => {
  let component: StockmarketStorageComponent;
  let fixture: ComponentFixture<StockmarketStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockmarketStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockmarketStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
