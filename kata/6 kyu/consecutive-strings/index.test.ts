import { describe, expect, it } from 'vitest';
import longestConsec from '.';

describe('longestConsec', () => {
  it('return the first longest string consisting of k consecutive strings taken in the array', () => {
    expect.assertions(9);

    expect(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2)).toBe(
      'abigailtheta',
    );
    expect(
      longestConsec(
        ['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'],
        1,
      ),
    ).toBe('oocccffuucccjjjkkkjyyyeehh');
    expect(longestConsec([], 3)).toBe('');
    expect(
      longestConsec(
        ['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'],
        2,
      ),
    ).toBe('wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck');
    expect(longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2)).toBe(
      'wlwsasphmxxowiaxujylentrklctozmymu',
    );
    expect(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2)).toBe('');
    expect(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)).toBe(
      'ixoyx3452zzzzzzzzzzzz',
    );
    expect(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15)).toBe('');
    expect(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0)).toBe('');
  });
});
