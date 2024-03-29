import { describe, expect, it } from 'vitest';
import digitize from '.';

describe('digitize', () => {
  it('should return list of individual digits', () => {
    expect.assertions(5);

    expect(digitize(123)).toStrictEqual([1, 2, 3]);
    expect(digitize(1)).toStrictEqual([1]);
    expect(digitize(0)).toStrictEqual([0]);
    expect(digitize(1230)).toStrictEqual([1, 2, 3, 0]);
    expect(digitize(8675309)).toStrictEqual([8, 6, 7, 5, 3, 0, 9]);
  });
});
