import binaryArrayToNumber from '.';

describe('binaryArrayToNumber', () => {
  it('should convert binary value in array to integer', () => {
    expect(binaryArrayToNumber([0, 0, 0, 1])).toEqual(1);
    expect(binaryArrayToNumber([0, 0, 1, 0])).toEqual(2);
    expect(binaryArrayToNumber([1, 1, 1, 1])).toEqual(15);
    expect(binaryArrayToNumber([0, 1, 1, 0])).toEqual(6);
  });
});
