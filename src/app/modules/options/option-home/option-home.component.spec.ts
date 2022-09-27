import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionHomeComponent } from './option-home.component';

describe('OptionHomeComponent', () => {
  let component: OptionHomeComponent;
  let fixture: ComponentFixture<OptionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
