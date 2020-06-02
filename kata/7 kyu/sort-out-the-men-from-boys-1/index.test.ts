import menFromBoys from '.';

describe('menFromBoys', () => {
  it('should sort out men from boys', () => {
    expect.assertions(15);

    expect(menFromBoys([7, 3, 14, 17])).toStrictEqual([14, 17, 7, 3]);
    expect(menFromBoys([2, 43, 95, 90, 37])).toStrictEqual([2, 90, 95, 43, 37]);
    expect(menFromBoys([20, 33, 50, 34, 43, 46])).toStrictEqual([20, 34, 46, 50, 43, 33]);
    expect(menFromBoys([82, 91, 72, 76, 76, 100, 85])).toStrictEqual([72, 76, 82, 100, 91, 85]);
    expect(menFromBoys([2, 15, 17, 15, 2, 10, 10, 17, 1, 1])).toStrictEqual([2, 10, 17, 15, 1]);
    expect(menFromBoys([-32, -39, -35, -41])).toStrictEqual([-32, -35, -39, -41]);
    expect(menFromBoys([-64, -71, -63, -66, -65])).toStrictEqual([-66, -64, -63, -65, -71]);
    expect(menFromBoys([-94, -99, -100, -99, -96, -99])).toStrictEqual([-100, -96, -94, -99]);
    expect(menFromBoys([-53, -26, -53, -27, -49, -51, -14])).toStrictEqual([
      -26,
      -14,
      -27,
      -49,
      -51,
      -53,
    ]);
    expect(menFromBoys([-17, -45, -15, -33, -85, -56, -86, -30])).toStrictEqual([
      -86,
      -56,
      -30,
      -15,
      -17,
      -33,
      -45,
      -85,
    ]);
    expect(menFromBoys([12, 89, -38, -78])).toStrictEqual([-78, -38, 12, 89]);
    expect(menFromBoys([2, -43, 95, -90, 37])).toStrictEqual([-90, 2, 95, 37, -43]);
    expect(menFromBoys([82, -61, -87, -12, 21, 1])).toStrictEqual([-12, 82, 21, 1, -61, -87]);
    expect(menFromBoys([63, -57, 76, -85, 88, 2, -28])).toStrictEqual([
      -28,
      2,
      76,
      88,
      63,
      -57,
      -85,
    ]);
    expect(menFromBoys([49, 818, -282, 900, 928, 281, -282, -1])).toStrictEqual([
      -282,
      818,
      900,
      928,
      281,
      49,
      -1,
    ]);
  });
});
