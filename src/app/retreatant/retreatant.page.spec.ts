import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RetreatantPage } from './retreatant.page';

describe('RetreatantPage', () => {
  let component: RetreatantPage;
  let fixture: ComponentFixture<RetreatantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetreatantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RetreatantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
