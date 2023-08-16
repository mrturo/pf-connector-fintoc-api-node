import { Constants as ConstantsUtil } from '../../../src/domain/util/constants.util';

describe('Class Constants', () => {
  it('Happy Path', async () => {
    expect(ConstantsUtil.XXX()).toBe('XXX');
  });
});
