import { NameSortingPipe } from './name-sorting.pipe';

describe('NameSortingPipe', () => {
  it('create an instance', () => {
    const pipe = new NameSortingPipe();
    expect(pipe).toBeTruthy();
  });
});
