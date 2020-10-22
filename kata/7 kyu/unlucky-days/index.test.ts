import unluckyDays from '.';

describe('unluckyDays', () => {
  it('should return the number of Friday 13th in the given year', () => {
    expect.assertions(10);

    expect(unluckyDays(1586)).toStrictEqual(1);
    expect(unluckyDays(1001)).toStrictEqual(3);
    expect(unluckyDays(2819)).toStrictEqual(2);
    expect(unluckyDays(2792)).toStrictEqual(2);
    expect(unluckyDays(2723)).toStrictEqual(2);
    expect(unluckyDays(1909)).toStrictEqual(1);
    expect(unluckyDays(1812)).toStrictEqual(2);
    expect(unluckyDays(1618)).toStrictEqual(2);
    expect(unluckyDays(2132)).toStrictEqual(1);
    expect(unluckyDays(2065)).toStrictEqual(3);
  });
});
