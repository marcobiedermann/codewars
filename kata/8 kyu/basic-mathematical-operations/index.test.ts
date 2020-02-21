import basicOp from '.';

describe('basicOp', () => {
  it('should perform basic operations', () => {
    expect(basicOp('+', 4, 7)).toEqual(11);
    expect(basicOp('-', 15, 18)).toEqual(-3);
    expect(basicOp('*', 5, 5)).toEqual(25);
    expect(basicOp('/', 49, 7)).toEqual(7);
  });
});
