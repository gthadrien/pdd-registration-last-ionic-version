import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetreatantCheckinConfirmPage } from './retreatant-checkin-confirm.page';

describe('RetreatantCheckinConfirmPage', () => {
  let component: RetreatantCheckinConfirmPage;
  let fixture: ComponentFixture<RetreatantCheckinConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetreatantCheckinConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetreatantCheckinConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
