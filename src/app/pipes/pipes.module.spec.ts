import { PipesModule } from './pipes.module';
import { getTestConfigModule } from '../testing/test-config';

describe('PipesModule', () => {
  let pipesModule: PipesModule;

  beforeEach(() => {
    pipesModule = new PipesModule();
  });

  it('should create an instance', () => {
    expect(pipesModule).toBeTruthy();
  });
});
