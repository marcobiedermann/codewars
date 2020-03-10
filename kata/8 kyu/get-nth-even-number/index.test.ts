import nthEven from '.';

describe('nthEven', () => {
  it('should return the nth even number', () => {
    expect.assertions(5);

    expect(nthEven(1)).toStrictEqual(0);
    expect(nthEven(2)).toStrictEqual(2);
    expect(nthEven(3)).toStrictEqual(4);

    expect(nthEven(100)).toStrictEqual(198);
    expect(nthEven(1298734)).toStrictEqual(2597466);
  });
});
