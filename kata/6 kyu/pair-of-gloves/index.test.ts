import { describe, expect, it } from 'vitest';
import numberOfPairs from '.';

describe('numberOfPairs', () => {
  it('should return the number of pairs', () => {
    expect.assertions(3);

    expect(numberOfPairs(['red', 'red'])).toBe(1);
    expect(numberOfPairs(['red', 'green', 'blue'])).toBe(0);
    expect(numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black'])).toBe(3);
  });
});
