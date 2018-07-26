import { AddCourseModule } from '@app/core/add-course/add-course.module';

describe('AddCourseModule', () => {
  let addCourseModule: AddCourseModule;

  beforeEach(() => {
    addCourseModule = new AddCourseModule();
  });

  it('should create an instance', () => {
    expect(addCourseModule).toBeTruthy();
  });
});
