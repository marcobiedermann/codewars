import multipleOfIndex from '.';

describe('multipleOfIndex', () => {
  it('should return array of elements which are multiple of their own index', () => {
    expect(multipleOfIndex([22, -6, 32, 82, 9, 25])).toStrictEqual([-6, 32, 25]);
    expect(multipleOfIndex([68, -1, 1, -7, 10, 10])).toStrictEqual([-1, 10]);
    expect(multipleOfIndex([11, -11])).toStrictEqual([-11]);
    expect(
      multipleOfIndex([
        -56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92, 68,
      ]),
    ).toStrictEqual([-85, 72, 0, 68]);
    expect(multipleOfIndex([28, 38, -44, -99, -13, -54, 77, -51])).toStrictEqual([38, -44, -99]);
    expect(multipleOfIndex([-1, -49, -1, 67, 8, -60, 39, 35])).toStrictEqual([-49, 8, -60, 35]);
  });
});
