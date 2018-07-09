import { NameSortingPipe } from './name.pipe';

describe('NameSortingPipe', () => {
  it('create an instance', () => {
    const pipe = new NameSortingPipe();
    expect(pipe).toBeTruthy();
  });
});
