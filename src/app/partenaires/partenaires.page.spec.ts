import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenairesPage } from './partenaires.page';

describe('PartenairesPage', () => {
  let component: PartenairesPage;
  let fixture: ComponentFixture<PartenairesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartenairesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenairesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
