import { Environment as EnvironmentUtil } from '../../../src/domain/util/environment.util';

describe('Class Environment', () => {
  it('Happy Path', async () => {
    const envProduction: EnvironmentUtil = new EnvironmentUtil(
      EnvironmentUtil.PRODUCTION()
    );
    expect(envProduction.value).toBe(EnvironmentUtil.PRODUCTION());
    expect(envProduction.file).toBe(EnvironmentUtil.FILE_ENV());
    const envUndefined: EnvironmentUtil = new EnvironmentUtil();
    expect(envUndefined.value).toBe(EnvironmentUtil.PRODUCTION());
    expect(envUndefined.file).toBe(EnvironmentUtil.FILE_ENV());
    const envTesting: EnvironmentUtil = new EnvironmentUtil(
      EnvironmentUtil.TESTING()
    );
    expect(envTesting.value).toBe(EnvironmentUtil.TESTING());
    const envJenkins: EnvironmentUtil = new EnvironmentUtil(
      EnvironmentUtil.JENKINS()
    );
    expect(envJenkins.value).toBe(EnvironmentUtil.JENKINS());
    expect(envJenkins.file).toBe(EnvironmentUtil.FILE_ENV());
    const envDevelopment: EnvironmentUtil = new EnvironmentUtil(
      EnvironmentUtil.DEVELOPMENT()
    );
    expect(envDevelopment.value).toBe(EnvironmentUtil.DEVELOPMENT());
  });
});
