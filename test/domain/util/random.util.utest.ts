import { Random as RandomUtil } from '../../../src/domain/util/random.util';

describe('Class URL', () => {
  it('Happy Path', async () => {
    const r1: RandomUtil = new RandomUtil();
    expect(r1.id.length).toBeGreaterThan(0);
    const r2: RandomUtil = new RandomUtil('');
    expect(r2.id.length).toBeGreaterThan(0);
    const r3: RandomUtil = new RandomUtil('1');
    expect(r3.id).toBe('1');
    const r4: RandomUtil = new RandomUtil(2);
    expect(r4.id).toBe('2');
    const r5: string = RandomUtil.get();
    expect(r5.length).toBeGreaterThan(0);
  });
});
