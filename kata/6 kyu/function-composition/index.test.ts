import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import compose from './index.ts';

describe('compose', () => {
  it('should compose two functions', () => {
    function add1(a: number): number {
      return a + 1;
    }
    function id<T>(a: T): T {
      return a;
    }

    function addAll3(a: number, b: number, c: number): number {
      return a + b + c;
    }

    assert.strictEqual(compose(add1, id)(0), 1);
    assert.strictEqual(compose(add1, addAll3)(1, 2, 3), 7);
  });
});
