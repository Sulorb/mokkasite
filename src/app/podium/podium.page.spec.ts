import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodiumPage } from './podium.page';

describe('PodiumPage', () => {
  let component: PodiumPage;
  let fixture: ComponentFixture<PodiumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodiumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
