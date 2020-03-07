import paperwork from '.';

describe('paperwork', () => {
  it('should return number of copies', () => {
    expect.assertions(1);

    expect(paperwork(5, 5)).toStrictEqual(25);
  });
});
