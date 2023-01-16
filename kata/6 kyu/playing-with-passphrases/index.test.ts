import playPass from '.';

describe('playPass', () => {
  it('should return the passphrase', () => {
    expect.assertions(2);

    expect(playPass('I LOVE YOU!!!', 1)).toBe('!!!vPz fWpM J');
    expect(playPass('MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015', 2)).toBe(
      '4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO',
    );
  });
});
