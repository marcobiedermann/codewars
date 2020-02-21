import arrayPlusArray from '.';

describe('arrayPlusArray', () => {
  it('should sum elements', () => {
    expect(arrayPlusArray([1, 2, 3], [4, 5, 6])).toEqual(21);
    expect(arrayPlusArray([-1, -2, -3], [-4, -5, -6])).toEqual(-21);
    expect(arrayPlusArray([0, 0, 0], [4, 5, 6])).toEqual(15);
    expect(arrayPlusArray([100, 200, 300], [400, 500, 600])).toEqual(2100);
  });
});
