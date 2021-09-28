import countRedBeads from '.';

describe('countRedBeads', () => {
  it('should count red beads', () => {
    expect.assertions(4);

    expect(countRedBeads(0)).toStrictEqual(0);
    expect(countRedBeads(1)).toStrictEqual(0);
    expect(countRedBeads(3)).toStrictEqual(4);
    expect(countRedBeads(5)).toStrictEqual(8);
  });
});
