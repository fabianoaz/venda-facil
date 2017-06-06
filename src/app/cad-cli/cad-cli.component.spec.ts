import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadCliComponent } from './cad-cli.component';

describe('CadCliComponent', () => {
  let component: CadCliComponent;
  let fixture: ComponentFixture<CadCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
