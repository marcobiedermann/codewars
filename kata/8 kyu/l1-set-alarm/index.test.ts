import setAlarm from '.';

describe('setAlarm', () => {
  it('should return true if you are employed and not on vacation', () => {
    expect.assertions(3);

    expect(setAlarm(true, true)).toStrictEqual(false);
    expect(setAlarm(false, true)).toStrictEqual(false);
    expect(setAlarm(true, false)).toStrictEqual(true);
  });
});
