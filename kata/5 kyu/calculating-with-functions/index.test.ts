import { dividedBy, eight, five, four, minus, nine, plus, seven, six, three, times, two } from '.';

describe('calculations', () => {
  it('should calculate with functions', () => {
    expect.assertions(4);

    expect(seven(times(five()))).toStrictEqual(35);
    expect(four(plus(nine()))).toStrictEqual(13);
    expect(eight(minus(three()))).toStrictEqual(5);
    expect(six(dividedBy(two()))).toStrictEqual(3);
  });
});
