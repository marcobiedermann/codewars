import rowWeights from '.';

describe('rowWeights', () => {
  it('should return total weight of team 1 and team 2', () => {
    expect.assertions(10);

    expect(rowWeights([80])).toStrictEqual([80, 0]);
    expect(rowWeights([100, 50])).toStrictEqual([100, 50]);
    expect(rowWeights([50, 60, 70, 80])).toStrictEqual([120, 140]);
    expect(rowWeights([13, 27, 49])).toStrictEqual([62, 27]);
    expect(rowWeights([70, 58, 75, 34, 91])).toStrictEqual([236, 92]);
    expect(rowWeights([29, 83, 67, 53, 19, 28, 96])).toStrictEqual([211, 164]);
    expect(rowWeights([0])).toStrictEqual([0, 0]);
    expect(rowWeights([100, 51, 50, 100])).toStrictEqual([150, 151]);
    expect(rowWeights([39, 84, 74, 18, 59, 72, 35, 61])).toStrictEqual([207, 235]);
    expect(rowWeights([0, 1, 0])).toStrictEqual([0, 1]);
  });
});
