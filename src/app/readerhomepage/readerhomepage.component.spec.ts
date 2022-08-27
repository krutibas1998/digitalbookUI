import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderhomepageComponent } from './readerhomepage.component';

describe('ReaderhomepageComponent', () => {
  let component: ReaderhomepageComponent;
  let fixture: ComponentFixture<ReaderhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderhomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
