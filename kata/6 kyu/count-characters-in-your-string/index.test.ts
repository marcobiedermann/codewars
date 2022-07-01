import { expect } from 'vitest';
import count from '.';

describe('count', () => {
  it('should count characters in string', () => {
    expect(count('aba')).toStrictEqual({ a: 2, b: 1 });
    expect(count('')).toStrictEqual({});
  });
});
