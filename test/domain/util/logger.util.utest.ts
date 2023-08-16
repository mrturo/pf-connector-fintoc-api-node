import { Environment as EnvironmentUtil } from '../../../src/domain/util/environment.util';
import { Logger as LoggerUtil } from '../../../src/domain/util/logger.util';
EnvironmentUtil.FILE_ENV();

describe('Class Logger', () => {
  it('Happy Path - Any environment', async () => {
    process.env.NODE_ENV = 'testing';
    EnvironmentUtil.init();
    expect(LoggerUtil.warn('Test')).toBe('Test');
    expect(LoggerUtil.debug('Test')).toBe('Test');
    expect(LoggerUtil.error('Test1 | Test2')).toBe('Test1 | Test2');
    expect(LoggerUtil.info(['Test1', 'Test2'])).toBe('Test1 | Test2');
    expect(LoggerUtil.separator()).toBe('*****');
  });
  it('Happy Path - Jenkins environment', async () => {
    process.env.NODE_ENV = 'test';
    EnvironmentUtil.init();
    expect(LoggerUtil.warn('Test')).toBe('');
    expect(LoggerUtil.debug('Test')).toBe('');
    expect(LoggerUtil.error('Test')).toBe('');
    expect(LoggerUtil.info('Test')).toBe('');
    expect(LoggerUtil.separator()).toBe('');
  });
});
