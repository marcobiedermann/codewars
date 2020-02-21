import arithmetic from '.';

describe('arithmetic', () => {
  it('should calculate result', () => {
    expect.assertions(4);

    expect(arithmetic(1, 2, 'add')).toStrictEqual(3);
    expect(arithmetic(8, 2, 'subtract')).toStrictEqual(6);
    expect(arithmetic(5, 2, 'multiply')).toStrictEqual(10);
    expect(arithmetic(8, 2, 'divide')).toStrictEqual(4);
  });
});
