import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetreatantCheckinPage } from './retreatant-checkin.page';

describe('RetreatantCheckinPage', () => {
  let component: RetreatantCheckinPage;
  let fixture: ComponentFixture<RetreatantCheckinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetreatantCheckinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetreatantCheckinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
