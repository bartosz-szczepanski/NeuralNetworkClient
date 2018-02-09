import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouletteStorageComponent } from './roulette-storage.component';

describe('RouletteStorageComponent', () => {
  let component: RouletteStorageComponent;
  let fixture: ComponentFixture<RouletteStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouletteStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouletteStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
