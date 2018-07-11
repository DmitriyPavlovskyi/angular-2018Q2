import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TodoListItemComponent } from './todo-list-item.component';

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;
  const course = {
    title: 'Mocked title',
    creationDate: 1530870511382,
    description: 'Mocked description',
    duration: 90,
    id: 0
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.componentInstance;
    component.course = course;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call edit todo event', () => {
    fixture.detectChanges();
    const addSpy = spyOn(component, 'handleEdit');
    const addBtn = fixture.debugElement.query(By.css('.edit-todo-button'));
    addBtn.triggerEventHandler('click', undefined);

    expect(addSpy).toHaveBeenCalled();
  });

  it('should call edit todo event', () => {
    fixture.detectChanges();
    const addSpy = spyOn(component, 'handleDelete');
    const addBtn = fixture.debugElement.query(By.css('.delete-todo-button'));
    addBtn.triggerEventHandler('click', undefined);

    expect(addSpy).toHaveBeenCalled();
  });

  it('should call delete course method', () => {
    expect(component.handleDelete()).toEqual(0);
  });

  it('should call edit course method', () => {
    expect(component.handleEdit()).toEqual('---List item. Edit triggered');
  });
});
