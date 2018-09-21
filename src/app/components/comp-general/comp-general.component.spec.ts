import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompGeneralComponent } from './comp-general.component';

describe('CompGeneralComponent', () => {
  let component: CompGeneralComponent;
  let fixture: ComponentFixture<CompGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
