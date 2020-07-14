import sumTriangularNumbers from '.';

describe('sumTriangularNumbers', () => {
  it('should calculate sum of triangular numbers', () => {
    expect.assertions(5);

    expect(sumTriangularNumbers(6)).toStrictEqual(56);
    expect(sumTriangularNumbers(34)).toStrictEqual(7140);
    expect(sumTriangularNumbers(-291)).toStrictEqual(0);
    expect(sumTriangularNumbers(943)).toStrictEqual(140205240);
    expect(sumTriangularNumbers(-971)).toStrictEqual(0);
  });
});
