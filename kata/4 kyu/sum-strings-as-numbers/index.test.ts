import { describe, expect, it } from 'vitest';
import sumStrings from './index.ts';

describe('sumStrings', () => {
  it('should sum two strings', () => {
    expect.assertions(1);

    expect(sumStrings('123', '456')).toBe('579');
  });
});
