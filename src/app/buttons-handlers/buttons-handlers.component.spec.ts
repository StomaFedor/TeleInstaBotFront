import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsHandlersComponent } from './buttons-handlers.component';

describe('ButtonsHandlersComponent', () => {
  let component: ButtonsHandlersComponent;
  let fixture: ComponentFixture<ButtonsHandlersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsHandlersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsHandlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
