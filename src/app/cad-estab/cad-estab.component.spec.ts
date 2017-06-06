import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadEstabComponent } from './cad-estab.component';

describe('CadEstabComponent', () => {
  let component: CadEstabComponent;
  let fixture: ComponentFixture<CadEstabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadEstabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadEstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
