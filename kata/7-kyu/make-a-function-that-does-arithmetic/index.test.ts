import arithmetic from '.';

describe('arithmetic', () => {
  it('should calculate result', () => {
    expect(arithmetic(1, 2, 'add')).toEqual(3);
    expect(arithmetic(8, 2, 'subtract')).toEqual(6);
    expect(arithmetic(5, 2, 'multiply')).toEqual(10);
    expect(arithmetic(8, 2, 'divide')).toEqual(4);
  });
});
