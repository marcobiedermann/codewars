import capitals from '.';

describe('capitals', () => {
  it('should return list of indexed of all capital letters', () => {
    expect(capitals('CodEWaRs')).toStrictEqual([0, 3, 4, 6]);
  });
});
