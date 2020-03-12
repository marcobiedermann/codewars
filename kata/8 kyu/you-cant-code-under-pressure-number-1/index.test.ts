import doubleInteger from '.';

describe('doubleInteger', () => {
  it('should double integer', () => {
    expect.assertions(1);

    expect(doubleInteger(2)).toStrictEqual(4);
  });
});
