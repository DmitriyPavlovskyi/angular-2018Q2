import { DurationSortingPipe } from '@app/shared/pipes/duration.pipe';

describe('DurationSortingPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationSortingPipe();
    expect(pipe).toBeTruthy();
  });
});
