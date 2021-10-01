import setAlarm from '.';

describe('setAlarm', () => {
  it('should return true if you are employed and not on vacation', () => {
    expect.assertions(3);

    expect(setAlarm(true, true)).toBe(false);
    expect(setAlarm(false, true)).toBe(false);
    expect(setAlarm(true, false)).toBe(true);
  });
});
