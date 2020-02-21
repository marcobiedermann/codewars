import binaryArrayToNumber from '.';

describe('binaryArrayToNumber', () => {
  it('should convert binary value in array to integer', () => {
    expect.assertions(4);

    expect(binaryArrayToNumber([0, 0, 0, 1])).toStrictEqual(1);
    expect(binaryArrayToNumber([0, 0, 1, 0])).toStrictEqual(2);
    expect(binaryArrayToNumber([1, 1, 1, 1])).toStrictEqual(15);
    expect(binaryArrayToNumber([0, 1, 1, 0])).toStrictEqual(6);
  });
});
