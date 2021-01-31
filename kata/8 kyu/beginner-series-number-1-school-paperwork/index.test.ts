import paperwork from '.';

describe('paperwork', () => {
  it('should return number of copies', () => {
    expect.assertions(3);

    expect(paperwork(5, 5)).toStrictEqual(25);
    expect(paperwork(-1, 5)).toStrictEqual(0);
    expect(paperwork(5, -1)).toStrictEqual(0);
  });
});
