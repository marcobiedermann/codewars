import findNb from '.';

describe('findNb', () => {
  it('should return numbers of cube exactly fitting in volume', () => {
    expect.assertions(4);

    expect(findNb(4183059834009)).toStrictEqual(2022);
    expect(findNb(24723578342962)).toStrictEqual(-1);
    expect(findNb(135440716410000)).toStrictEqual(4824);
    expect(findNb(40539911473216)).toStrictEqual(3568);
  });
});
