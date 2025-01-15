import assert from 'assert';
import { describe, it } from 'node:test';
import fizzbuzz from './index.ts';

describe('fizzbuzz', () => {
  it('should return FizzBuzz until `n`', () => {
    assert.deepEqual(fizzbuzz(15), [
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
    ]);
  });
});
