import getRealFloor from '.';

describe('getRealFloor', () => {
  it('should return the floor in the european system', () => {
    expect.assertions(4);

    expect(getRealFloor(0)).toStrictEqual(0);
    expect(getRealFloor(1)).toStrictEqual(0);
    expect(getRealFloor(5)).toStrictEqual(4);
    expect(getRealFloor(15)).toStrictEqual(13);
  });
});
