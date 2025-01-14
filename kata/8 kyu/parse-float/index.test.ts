import { describe, expect, it } from 'vitest';
import parseF from './index.ts';

describe('parseF', () => {
  it('should parse string to float', () => {
    expect.assertions(2);

    expect(parseF('1')).toBe(1.0);
    expect(parseF('A')).toBeNull();
  });
});
