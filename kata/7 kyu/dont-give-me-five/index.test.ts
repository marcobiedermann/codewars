import dontGiveMeFive from '.';

describe('dontGiveMeFive', () => {
  it('should return total numbers which do not include digit `5`', () => {
    expect(dontGiveMeFive(1, 9)).toEqual(8);
    expect(dontGiveMeFive(4, 17)).toEqual(12);
  });
});
