import { describe, expect, it } from 'vitest';
import solution from './index.ts';

describe('solution', () => {
  it('should split string into pairs of two', () => {
    expect.assertions(3);

    expect(solution('abcdef')).toStrictEqual(['ab', 'cd', 'ef']);
    expect(solution('abcdefg')).toStrictEqual(['ab', 'cd', 'ef', 'g_']);
    expect(solution('')).toStrictEqual([]);
  });
});
