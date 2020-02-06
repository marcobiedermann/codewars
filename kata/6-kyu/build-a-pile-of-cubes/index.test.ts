import findNb from '.';

describe('findNb', () => {
  it('should return numbers of cube exactly fitting in volume', () => {
    expect(findNb(4183059834009)).toEqual(2022);
    expect(findNb(24723578342962)).toEqual(-1);
    expect(findNb(135440716410000)).toEqual(4824);
    expect(findNb(40539911473216)).toEqual(3568);
  });
});
