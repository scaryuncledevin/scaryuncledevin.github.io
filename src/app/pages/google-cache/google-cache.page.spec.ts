import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoogleCachePage } from './google-cache.page';

describe('GoogleCachePage', () => {
  let component: GoogleCachePage;
  let fixture: ComponentFixture<GoogleCachePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleCachePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoogleCachePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
