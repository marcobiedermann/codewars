import { describe, expect, it } from 'vitest';
import compose from '.';

describe('compose', () => {
  it('should compose two functions', () => {
    expect.assertions(2);

    function add1(a: number): number {
      return a + 1;
    }
    function id<T>(a: T): T {
      return a;
    }

    function addAll3(a: number, b: number, c: number): number {
      return a + b + c;
    }

    expect(compose(add1, id)(0)).toBe(1);
    expect(compose(add1, addAll3)(1, 2, 3)).toBe(7);
  });
});
