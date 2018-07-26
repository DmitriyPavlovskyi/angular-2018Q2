import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from '@app/features/components/header/header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const user = {
    firstName: 'John',
    lastName: 'Smith',
    id: 0
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.user = user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call logout method', () => {
    expect(component.handleLogOff()).toEqual('---Header. User log off triggered');
  });

  it('should call logout event', () => {
    fixture.detectChanges();
    const addSpy = spyOn(component, 'handleLogOff');
    const addBtn = fixture.debugElement.query(By.css('.logout-button'));
    addBtn.triggerEventHandler('click', undefined);

    expect(addSpy).toHaveBeenCalled();
  });
});
