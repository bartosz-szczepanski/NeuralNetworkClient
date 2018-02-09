import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAlgorithmsComponent } from './about-algorithms.component';

describe('AboutAlgorithmsComponent', () => {
  let component: AboutAlgorithmsComponent;
  let fixture: ComponentFixture<AboutAlgorithmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAlgorithmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAlgorithmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
