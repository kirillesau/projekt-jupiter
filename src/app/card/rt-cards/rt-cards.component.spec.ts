import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtCardsComponent } from './rt-cards.component';

describe('RtCardsComponent', () => {
  let component: RtCardsComponent;
  let fixture: ComponentFixture<RtCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
