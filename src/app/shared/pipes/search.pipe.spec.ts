import { NameSortingPipe } from '@app/shared/pipes/search.pipe';

describe('NameSortingPipe', () => {
  it('create an instance', () => {
    const pipe = new NameSortingPipe();
    expect(pipe).toBeTruthy();
  });
});
