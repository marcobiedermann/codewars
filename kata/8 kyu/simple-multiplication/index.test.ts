import simpleMultiplication from '.';

describe('simpleMultiplication', () => {
  it('should multiply value by 8 if even otherwise by 9', () => {
    expect(simpleMultiplication(2)).toEqual(16);
    expect(simpleMultiplication(1)).toEqual(9);
    expect(simpleMultiplication(8)).toEqual(64);
    expect(simpleMultiplication(4)).toEqual(32);
    expect(simpleMultiplication(5)).toEqual(45);
  });
});
