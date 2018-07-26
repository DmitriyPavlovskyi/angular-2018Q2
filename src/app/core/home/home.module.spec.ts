import { HomeModule } from '@app/core/home/home.module';

describe('HomeModule', () => {
  let homeModule: HomeModule;

  beforeEach(() => {
    homeModule = new HomeModule();
  });

  it('should create an instance', () => {
    expect(homeModule).toBeTruthy();
  });
});
