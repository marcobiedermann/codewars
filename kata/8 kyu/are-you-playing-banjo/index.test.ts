import areYouPlayingBanjo from '.';

describe('areYouPlayingBanjo', () => {
  it('should append if person is playing banjo to name', () => {
    expect(areYouPlayingBanjo('Martin')).toBe('Martin does not play banjo');
    expect(areYouPlayingBanjo('Rikke')).toBe('Rikke plays banjo');
  });
});
