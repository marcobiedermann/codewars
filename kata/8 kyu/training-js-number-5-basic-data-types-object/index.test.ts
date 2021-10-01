import animal from '.';

describe('animal', () => {
  it('should return a string, describing the given object', () => {
    expect.assertions(3);

    expect(
      animal({
        name: 'dog',
        legs: 4,
        color: 'white',
      }),
    ).toBe('This white dog has 4 legs.');
    expect(
      animal({
        name: 'cock',
        legs: 2,
        color: 'red',
      }),
    ).toBe('This red cock has 2 legs.');
    expect(
      animal({
        name: 'rabbit',
        legs: 4,
        color: 'gray',
      }),
    ).toBe('This gray rabbit has 4 legs.');
  });
});
