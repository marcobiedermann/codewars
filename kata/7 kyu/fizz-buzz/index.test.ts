import { describe, expect, it } from 'vitest';
import fizzbuzz from '.';

describe('fizzbuzz', () => {
  it('should return FizzBuzz until `n`', () => {
    expect.assertions(1);

    expect(fizzbuzz(15)).toStrictEqual([
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
