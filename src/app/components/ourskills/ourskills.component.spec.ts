import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurskillsComponent } from './ourskills.component';

describe('OurskillsComponent', () => {
  let component: OurskillsComponent;
  let fixture: ComponentFixture<OurskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
