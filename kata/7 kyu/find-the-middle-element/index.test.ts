import gimme from '.';

describe('gimme', () => {
  it('should return middle element of triplet', () => {
    expect.assertions(2);

    expect(gimme([2, 3, 1])).toStrictEqual(0);
    expect(gimme([5, 10, 14])).toStrictEqual(1);
  });
});
