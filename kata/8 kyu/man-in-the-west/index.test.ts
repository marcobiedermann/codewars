import checkTheBucket from '.';

describe('checkTheBucket', () => {
  it('should check if there is gold in the bucket', () => {
    expect.assertions(5);

    expect(checkTheBucket(['stone', 'stone', 'stone', 'stone', 'stone'])).toStrictEqual(false);
    expect(checkTheBucket(['stone', 'stone', 'stone', 'stone', 'gold'])).toStrictEqual(true);
    expect(checkTheBucket(['gold', 'stone', 'stone', 'stone', 'stone'])).toStrictEqual(true);
    expect(checkTheBucket([])).toStrictEqual(false);
    expect(checkTheBucket(['stone', 'stone', 'stone', 'gold', 'gold'])).toStrictEqual(true);
  });
});
