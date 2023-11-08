import { describe, expect, it } from 'vitest';
import dataReverse from '.';

describe('dataReverse', () => {
  it('should reverse chunks of 8', () => {
    expect.assertions(2);

    expect(
      dataReverse([
        1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1,
        0,
      ]),
    ).toStrictEqual([
      1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1,
      1,
    ]);
    expect(dataReverse([0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1])).toStrictEqual([
      0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0,
    ]);
  });
});
