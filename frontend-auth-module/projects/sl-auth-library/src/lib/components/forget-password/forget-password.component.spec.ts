import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPassword } from './forget-password.component';

describe('ForgetPassword', () => {
  let component: ForgetPassword;
  let fixture: ComponentFixture<ForgetPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPassword ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});