import overTheRoad from '.';

describe('overTheRoad', () => {
  it('should return house address on opposite side', () => {
    expect.assertions(4);

    expect(overTheRoad(1, 3)).toStrictEqual(6);
    expect(overTheRoad(3, 3)).toStrictEqual(4);
    expect(overTheRoad(3, 5)).toStrictEqual(8);
    expect(overTheRoad(2, 3)).toStrictEqual(5);
  });
});
