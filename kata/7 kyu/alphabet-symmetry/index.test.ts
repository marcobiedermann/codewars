import { describe, expect, it } from 'vitest';
import solve from './index.ts';

describe('solve', () => {
  it('should return an array of the number of letters that occupy their positions in the alphabet', () => {
    expect.assertions(4);

    expect(solve(['abode', 'ABc', 'xyzD'])).toStrictEqual([4, 3, 1]);
    expect(solve(['abide', 'ABc', 'xyz'])).toStrictEqual([4, 3, 0]);
    expect(solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc'])).toStrictEqual([6, 5, 7]);
    expect(solve(['encode', 'abc', 'xyzD', 'ABmD'])).toStrictEqual([1, 3, 1, 3]);
  });
});
