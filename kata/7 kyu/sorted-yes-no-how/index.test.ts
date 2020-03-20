import isSortedAndHow from '.';

describe('isSortedAndHow', () => {
  it('should return sorting order', () => {
    expect.assertions(3);

    expect(isSortedAndHow([1, 2])).toStrictEqual('yes, ascending');
    expect(isSortedAndHow([15, 7, 3, -8])).toStrictEqual('yes, descending');
    expect(isSortedAndHow([4, 2, 30])).toStrictEqual('no');
  });
});
