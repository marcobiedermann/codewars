import past from '.';

describe('past', () => {
  it('should convert time to milliseconds', () => {
    expect.assertions(5);

    expect(past(0, 1, 1)).toStrictEqual(61000);
    expect(past(1, 1, 1)).toStrictEqual(3661000);
    expect(past(0, 0, 0)).toStrictEqual(0);
    expect(past(1, 0, 1)).toStrictEqual(3601000);
    expect(past(1, 0, 0)).toStrictEqual(3600000);
  });
});
