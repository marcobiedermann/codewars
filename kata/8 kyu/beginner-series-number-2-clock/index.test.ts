import past from '.';

describe('past', () => {
  it('should convert time to milliseconds', () => {
    expect.assertions(5);

    expect(past(0, 1, 1)).toBe(61000);
    expect(past(1, 1, 1)).toBe(3661000);
    expect(past(0, 0, 0)).toBe(0);
    expect(past(1, 0, 1)).toBe(3601000);
    expect(past(1, 0, 0)).toBe(3600000);
  });
});
