import paperwork from '.';

describe('paperwork', () => {
  it('should return number of copies', () => {
    expect(paperwork(5, 5)).toBe(25);
    expect(paperwork(-1, 5)).toBe(0);
    expect(paperwork(5, -1)).toBe(0);
  });
});
