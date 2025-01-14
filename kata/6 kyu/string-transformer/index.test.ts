import { describe, expect, it } from 'vitest';
import stringTransformer from './index.ts';

describe('stringTransformer', () => {
  it('should change lower to upper and reverse the order of words', () => {
    expect.assertions(1);

    expect(stringTransformer('Example string')).toBe('STRING eXAMPLE');
  });
});
