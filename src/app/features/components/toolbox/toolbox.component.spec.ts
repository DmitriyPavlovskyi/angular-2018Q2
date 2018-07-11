import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolboxComponent } from './toolbox.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('ToolboxComponent', () => {
  let component: ToolboxComponent;
  let fixture: ComponentFixture<ToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolboxComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call search method with correct data', () => {
    const addSpy = spyOn(component, 'handleSearch');


    expect(addSpy).toHaveBeenCalled();
  });
  it('should call add course method', () => {
    expect(component.handleAddCourse()).toEqual('---Toolbox. Add course triggered');
  });

  it('should call add course event', () => {
    fixture.detectChanges();
    const addSpy = spyOn(component, 'handleAddCourse');
    const addBtn = fixture.debugElement.query(By.css('.add-course-button'));
    addBtn.triggerEventHandler('click', undefined);

    expect(addSpy).toHaveBeenCalled();
  });

  it('should call search course event', () => {
    fixture.detectChanges();
    const addSpy = spyOn(component, 'handleSearch');
    const addBtn = fixture.debugElement.query(By.css('.search-button'));
    addBtn.triggerEventHandler('click', undefined);

    expect(addSpy).toHaveBeenCalled();
  });
});
