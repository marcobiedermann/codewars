import getAge from '.';

describe('getAge', () => {
  it('should return first character as number', () => {
    expect.assertions(1);

    expect(getAge('4 years old')).toStrictEqual(4);
  });
});
