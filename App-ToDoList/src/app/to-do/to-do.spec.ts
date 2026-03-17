import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDO } from './to-do';

describe('ToDO', () => {
  let component: ToDO;
  let fixture: ComponentFixture<ToDO>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDO]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDO);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
