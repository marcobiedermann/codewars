import longestConsec from '.';

describe('longestConsec', () => {
  it('return the first longest string consisting of k consecutive strings taken in the array', () => {
    expect.assertions(9);

    expect(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2)).toStrictEqual(
      'abigailtheta',
    );
    expect(
      longestConsec(
        ['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'],
        1,
      ),
    ).toStrictEqual('oocccffuucccjjjkkkjyyyeehh');
    expect(longestConsec([], 3)).toStrictEqual('');
    expect(
      longestConsec(
        ['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'],
        2,
      ),
    ).toStrictEqual('wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck');
    expect(
      longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2),
    ).toStrictEqual('wlwsasphmxxowiaxujylentrklctozmymu');
    expect(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2)).toStrictEqual(
      '',
    );
    expect(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)).toStrictEqual(
      'ixoyx3452zzzzzzzzzzzz',
    );
    expect(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15)).toStrictEqual('');
    expect(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0)).toStrictEqual('');
  });
});
