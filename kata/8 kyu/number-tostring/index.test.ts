import { describe, expect, it } from 'vitest';
import a from './index.ts';

describe('a', () => {
  it('should convert number to string', () => {
    expect.assertions(1);

    expect(a).toBe('123');
  });
});
