import simpleMultiplication from '.';

describe('simpleMultiplication', () => {
  it('should multiply value by 8 if even otherwise by 9', () => {
    expect.assertions(5);

    expect(simpleMultiplication(2)).toStrictEqual(16);
    expect(simpleMultiplication(1)).toStrictEqual(9);
    expect(simpleMultiplication(8)).toStrictEqual(64);
    expect(simpleMultiplication(4)).toStrictEqual(32);
    expect(simpleMultiplication(5)).toStrictEqual(45);
  });
});
