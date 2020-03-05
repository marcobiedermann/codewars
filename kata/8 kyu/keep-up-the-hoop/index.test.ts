import hoopCount from '.';

describe('hoopCount', () => {
  it('should return an encouraging message', () => {
    expect.assertions(2);

    expect(hoopCount(3)).toStrictEqual('Keep at it until you get it');
    expect(hoopCount(11)).toStrictEqual('Great, now move on to tricks');
  });
});
