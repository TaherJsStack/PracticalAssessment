import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavComponent } from './core/components';
import { SharedModule } from './core/shared';
import { FooterComponent } from './core/components/footer/footer.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        // SharedModule,
      ],
      declarations: [
        NavComponent,
        FooterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('TEST HTML CONTENT ', () => {

    it(`should have as title 'PracticalAssessment'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('PracticalAssessment');
    });
  
    it('should render title', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const app = fixture.componentInstance;
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.content span')?.textContent).toContain(app.title);
    });
  
    it('should render app nav component exists element', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const nav = fixture.debugElement.query(By.css('nav'));
      expect(nav).toBeTruthy();
    });
  
    it('should render app main component exists element', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const main =fixture.debugElement.query(By.css('main'));
      expect(main).toBeTruthy();
    });
  
    it('should render app main containe router outlet', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const routerOutlet =fixture.debugElement.query(By.css('router-outlet'));
      expect(routerOutlet).toBeTruthy();
    });
  
  
    it('should render app footer component exists element', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const footer =fixture.debugElement.query(By.css('footer'));
      expect(footer).toBeTruthy();
    });
  })



  // describe('TEST HTML CONTENT ', () => {})
  // describe('TEST TS LOGIC', () => {})
  

});
