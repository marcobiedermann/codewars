import findLongest from '.';

describe('findLongest', () => {
  it('should return longest word as a number', () => {
    expect.assertions(5);

    expect(findLongest('The quick white fox jumped around the massive dog')).toStrictEqual(7);
    expect(findLongest('Take me to tinseltown with you')).toStrictEqual(10);
    expect(findLongest('Sausage chops')).toStrictEqual(7);
    expect(findLongest('Wind your body and wiggle your belly')).toStrictEqual(6);
    expect(findLongest('Lets all go on holiday')).toStrictEqual(7);
  });
});
