import { describe, expect, it } from 'vitest';
import seven from './index.ts';

describe('seven', () => {
  it('should return stack of last number and stack', () => {
    expect.assertions(4);

    expect(seven(1021)).toStrictEqual([10, 2]);
    expect(seven(1603)).toStrictEqual([7, 2]);
    expect(seven(371)).toStrictEqual([35, 1]);
    expect(seven(483)).toStrictEqual([42, 1]);
  });
});
