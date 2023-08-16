import { Configuration as ConfigurationUtil } from '../../../src/domain/util/configuration.util';
import { Environment as EnvironmentUtil } from '../../../src/domain/util/environment.util';
EnvironmentUtil.DEVELOPMENT();

describe('Class Configuration', () => {
  it('Happy Path', async () => {
    expect(ConfigurationUtil.packageName()).not.toBe('');
    expect(ConfigurationUtil.packageName()).not.toBeNull();
    expect(ConfigurationUtil.packageName()).not.toBeUndefined();
    expect(ConfigurationUtil.port()).toBeGreaterThan(0);
    expect(ConfigurationUtil.xxx()).not.toBe('');
    expect(ConfigurationUtil.xxx()).not.toBeNull();
    expect(ConfigurationUtil.xxx()).not.toBeUndefined();
    expect(ConfigurationUtil.isTrue('')).toBe(true);
    expect(ConfigurationUtil.isTrue('N')).toBe(false);
    expect(ConfigurationUtil.isTrue('S')).toBe(true);
    expect(ConfigurationUtil.isTrue('SI')).toBe(true);
    expect(ConfigurationUtil.isTrue('T')).toBe(true);
    expect(ConfigurationUtil.isTrue('TRUE')).toBe(true);
    expect(ConfigurationUtil.isTrue('V')).toBe(true);
    expect(ConfigurationUtil.isTrue('VERDADERO')).toBe(true);
    expect(ConfigurationUtil.isTrue('Y')).toBe(true);
    expect(ConfigurationUtil.isTrue('YES')).toBe(true);
    ConfigurationUtil.showValues();
    const conf = new ConfigurationUtil('${test}');
    expect(conf.value).toBe('');
  });
  it('Invalid configuration', async () => {
    const conf: ConfigurationUtil = new ConfigurationUtil();
    expect(conf.value).toBe('');
  });
  it('Get numeric value from string', async () => {
    expect(ConfigurationUtil.valueToNumber(new ConfigurationUtil('h'))).toBe(0);
    expect(ConfigurationUtil.valueToNumber(new ConfigurationUtil('1'))).toBe(1);
  });
  it('Get date value from string', async () => {
    expect(
      ConfigurationUtil.valueToDate(new ConfigurationUtil('20220110'))
    ).toStrictEqual(new Date(2022, 0, 10, 0, 0, 0, 0));
    expect(
      ConfigurationUtil.valueToDate(new ConfigurationUtil(''))
    ).toBeUndefined();
    expect(
      ConfigurationUtil.valueToDate(new ConfigurationUtil('ABCDEFGH'))
    ).toBeUndefined();
  });
  it('HideCharacters', async () => {
    expect(ConfigurationUtil.hideCharacters('Hola')).toBe('****');
  });
});
