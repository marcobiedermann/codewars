import getAge from '.';

describe('getAge', () => {
  it('should return first character as number', () => {
    expect(getAge('4 years old')).toBe(4);
  });
});
