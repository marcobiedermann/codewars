import { describe, expect, it } from 'vitest';
import areYouPlayingBanjo from './index.ts';

describe('areYouPlayingBanjo', () => {
  it('should append if person is playing banjo to name', () => {
    expect.assertions(2);

    expect(areYouPlayingBanjo('Martin')).toBe('Martin does not play banjo');
    expect(areYouPlayingBanjo('Rikke')).toBe('Rikke plays banjo');
  });
});
