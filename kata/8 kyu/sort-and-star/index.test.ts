import { describe, expect, it } from 'vitest';
import twoSort from '.';

describe('twoSort', () => {
  it('should sort words and return first separated by `***`', () => {
    expect.assertions(2);

    expect(
      twoSort(['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps']),
    ).toBe('b***i***t***c***o***i***n');
    expect(
      twoSort([
        'turns',
        'out',
        'random',
        'test',
        'cases',
        'are',
        'easier',
        'than',
        'writing',
        'out',
        'basic',
        'ones',
      ]),
    ).toBe('a***r***e');
  });
});
