import areYouPlayingBanjo from '.';

describe('areYouPlayingBanjo', () => {
  it('should append if person is playing banjo to name', () => {
    expect.assertions(2);

    expect(areYouPlayingBanjo('Martin')).toStrictEqual('Martin does not play banjo');
    expect(areYouPlayingBanjo('Rikke')).toStrictEqual('Rikke plays banjo');
  });
});
