import { describe, expect, it } from 'vitest';
import addLength from './index.ts';

describe('addLength', () => {
  it('should count length of words separated by space', () => {
    expect.assertions(2);

    expect(addLength('apple ban')).toStrictEqual(['apple 5', 'ban 3']);
    expect(addLength('you will win')).toStrictEqual(['you 3', 'will 4', 'win 3']);
  });
});
