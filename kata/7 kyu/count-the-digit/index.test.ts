import nbDig from '.';

describe('nbDig', () => {
  it('should count all digits used in writing all `k**2`', () => {
    expect(nbDig(5750, 0)).toEqual(4700);
    expect(nbDig(11011, 2)).toEqual(9481);
    expect(nbDig(12224, 8)).toEqual(7733);
    expect(nbDig(11549, 1)).toEqual(11905);
  });
});
