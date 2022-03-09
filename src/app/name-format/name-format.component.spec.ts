import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameFormatComponent } from './name-format.component';

describe('NameFormatComponent', () => {
  let component: NameFormatComponent;
  let fixture: ComponentFixture<NameFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameFormatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
