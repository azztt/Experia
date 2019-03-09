import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenComponent } from './expen.component';

describe('ExpenComponent', () => {
  let component: ExpenComponent;
  let fixture: ComponentFixture<ExpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
