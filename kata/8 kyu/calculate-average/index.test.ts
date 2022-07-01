/* eslint-disable camelcase */

import { expect } from 'vitest';
import find_average from '.';

describe('find_average', () => {
  it('should calculate average of numbers', () => {
    expect(find_average([1, 1, 1])).toBe(1);
    expect(find_average([1, 2, 3])).toBe(2);
  });
});
