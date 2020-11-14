import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetreatantCheckinInfoPage } from './retreatant-checkin-info.page';

describe('RetreatantCheckinInfoPage', () => {
  let component: RetreatantCheckinInfoPage;
  let fixture: ComponentFixture<RetreatantCheckinInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetreatantCheckinInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetreatantCheckinInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
