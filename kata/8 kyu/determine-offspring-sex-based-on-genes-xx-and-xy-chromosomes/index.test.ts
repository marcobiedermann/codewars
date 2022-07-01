import chromosomeCheck from '.';

describe('chromosomeCheck', () => {
  it('should determin the sex of the offspring', () => {
    expect(chromosomeCheck('XY')).toBe("Congratulations! You're going to have a son.");
    expect(chromosomeCheck('XX')).toBe("Congratulations! You're going to have a daughter.");
  });
});
