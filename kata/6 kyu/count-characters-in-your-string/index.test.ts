import { describe, expect, it } from 'vitest';
import count from '.';

describe('count', () => {
  it('should count characters in string', () => {
    expect.assertions(2);

    expect(count('aba')).toStrictEqual({ a: 2, b: 1 });
    expect(count('')).toStrictEqual({});
  });
});
