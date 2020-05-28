import capitals from '.';

describe('capitals', () => {
  it('should return list of indexed of all capital letters', () => {
    expect.assertions(1);

    expect(capitals('CodEWaRs')).toStrictEqual([0, 3, 4, 6]);
  });
});
