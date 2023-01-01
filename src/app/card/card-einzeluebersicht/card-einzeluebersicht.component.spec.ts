import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEinzeluebersichtComponent } from './card-einzeluebersicht.component';

describe('CardEinzeluebersichtComponent', () => {
  let component: CardEinzeluebersichtComponent;
  let fixture: ComponentFixture<CardEinzeluebersichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEinzeluebersichtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEinzeluebersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
