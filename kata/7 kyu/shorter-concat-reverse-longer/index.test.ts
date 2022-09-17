/* eslint-disable camelcase */

import shorter_reverse_longer from '.';

describe('shorter_reverse_longer', () => {
  it('should concatenate the shorter string and the longer string in reversed order', () => {
    expect.assertions(3);

    expect(shorter_reverse_longer('first', 'abcde')).toBe('abcdetsrifabcde');
    expect(shorter_reverse_longer('hello', 'bau')).toBe('bauollehbau');
    expect(shorter_reverse_longer('abcde', 'fghi')).toBe('fghiedcbafghi');
  });
});
