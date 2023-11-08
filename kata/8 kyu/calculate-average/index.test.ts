/* eslint-disable camelcase */

import { describe, expect, it } from 'vitest';
import find_average from '.';

describe('find_average', () => {
  it('should calculate average of numbers', () => {
    expect.assertions(2);

    expect(find_average([1, 1, 1])).toBe(1);
    expect(find_average([1, 2, 3])).toBe(2);
  });
});
