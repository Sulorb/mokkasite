import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionsPage } from './mentions.page';

describe('MentionsPage', () => {
  let component: MentionsPage;
  let fixture: ComponentFixture<MentionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
