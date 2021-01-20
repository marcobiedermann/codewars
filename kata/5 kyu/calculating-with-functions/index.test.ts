import {
  dividedBy,
  eight,
  five,
  four,
  minus,
  nine,
  one,
  plus,
  seven,
  six,
  three,
  times,
  two,
  zero,
} from '.';

describe('calculations', () => {
  it('should calculate with functions', () => {
    expect.assertions(24);

    expect(zero()).toStrictEqual(0);
    expect(one()).toStrictEqual(1);
    expect(two()).toStrictEqual(2);
    expect(three()).toStrictEqual(3);
    expect(four()).toStrictEqual(4);
    expect(five()).toStrictEqual(5);
    expect(six()).toStrictEqual(6);
    expect(seven()).toStrictEqual(7);
    expect(eight()).toStrictEqual(8);
    expect(nine()).toStrictEqual(9);

    expect(zero(plus(one()))).toStrictEqual(1);
    expect(one(plus(two()))).toStrictEqual(3);
    expect(two(plus(three()))).toStrictEqual(5);
    expect(three(plus(four()))).toStrictEqual(7);
    expect(four(plus(five()))).toStrictEqual(9);
    expect(five(plus(six()))).toStrictEqual(11);
    expect(six(plus(seven()))).toStrictEqual(13);
    expect(seven(plus(eight()))).toStrictEqual(15);
    expect(eight(plus(nine()))).toStrictEqual(17);
    expect(nine(plus(zero()))).toStrictEqual(9);

    expect(seven(times(five()))).toStrictEqual(35);
    expect(four(plus(nine()))).toStrictEqual(13);
    expect(eight(minus(three()))).toStrictEqual(5);
    expect(six(dividedBy(two()))).toStrictEqual(3);
  });
});
