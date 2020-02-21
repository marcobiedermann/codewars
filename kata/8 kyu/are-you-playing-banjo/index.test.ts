import areYouPlayingBanjo from '.';

describe('areYouPlayingBanjo', () => {
  it('should append if person is playing banjo to name', () => {
    expect(areYouPlayingBanjo('Martin')).toEqual('Martin does not play banjo');
    expect(areYouPlayingBanjo('Rikke')).toEqual('Rikke plays banjo');
  });
});
