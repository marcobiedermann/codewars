import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import longestConsec from './index.ts';

describe('longestConsec', () => {
  it('return the first longest string consisting of k consecutive strings taken in the array', () => {
    assert.strictEqual(
      longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2),
      'abigailtheta',
    );
    assert.strictEqual(
      longestConsec(
        ['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'],
        1,
      ),
      'oocccffuucccjjjkkkjyyyeehh',
    );
    assert.strictEqual(longestConsec([], 3), '');
    assert.strictEqual(
      longestConsec(
        ['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'],
        2,
      ),
      'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck',
    );
    assert.strictEqual(
      longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2),
      'wlwsasphmxxowiaxujylentrklctozmymu',
    );
    assert.strictEqual(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2), '');
    assert.strictEqual(
      longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3),
      'ixoyx3452zzzzzzzzzzzz',
    );
    assert.strictEqual(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15), '');
    assert.strictEqual(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0), '');
  });
});
