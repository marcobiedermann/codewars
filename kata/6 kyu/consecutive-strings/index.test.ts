import longestConsec from '.';

describe('longestConsec', () => {
  it('return the first longest string consisting of k consecutive strings taken in the array', () => {
    expect(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2)).toEqual(
      'abigailtheta',
    );
    expect(
      longestConsec(
        ['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'],
        1,
      ),
    ).toEqual('oocccffuucccjjjkkkjyyyeehh');
    expect(longestConsec([], 3)).toEqual('');
    expect(
      longestConsec(
        ['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'],
        2,
      ),
    ).toEqual('wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck');
    expect(longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2)).toEqual(
      'wlwsasphmxxowiaxujylentrklctozmymu',
    );
    expect(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2)).toEqual('');
    expect(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)).toEqual(
      'ixoyx3452zzzzzzzzzzzz',
    );
    expect(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15)).toEqual('');
    expect(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0)).toEqual('');
  });
});
