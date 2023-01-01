import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepageHeaderComponent } from './singlepage-header.component';

describe('SinglepageHeaderComponent', () => {
  let component: SinglepageHeaderComponent;
  let fixture: ComponentFixture<SinglepageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglepageHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglepageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
