import { expect } from 'vitest';
import count from '.';

describe('count', () => {
  it('should count all element in an array', () => {
    expect(count(['a', 'a', 'b', 'b', 'b'])).toStrictEqual({ a: 2, b: 3 });
  });
});
