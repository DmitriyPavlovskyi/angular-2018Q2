import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LoadMoreComponent } from '@app/features/components/load-more/load-more.component';

describe('LoadMoreComponent', () => {
  let component: LoadMoreComponent;
  let fixture: ComponentFixture<LoadMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const button: HTMLElement = nativeElement.querySelector('button');

    expect(button).toBeTruthy();
  });

  it('should have a right button name', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const button: HTMLElement = nativeElement.querySelector('button');

    expect(button.textContent).toEqual('LOAD MORE');
  });

  it('should call load more method', () => {
    expect(component.handleCLick()).toEqual('---Load more. Load button triggered');
  });

  it('should call load more event', () => {
    fixture.detectChanges();
    const addSpy = spyOn(component, 'handleCLick');
    const addBtn = fixture.debugElement.query(By.css('.load-more-button'));
    addBtn.triggerEventHandler('click', undefined);

    expect(addSpy).toHaveBeenCalled();
  });
});
