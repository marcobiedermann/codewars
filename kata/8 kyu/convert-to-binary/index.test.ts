import toBinary from '.';

describe('toBinary', () => {
  it('should convert value to binary format', () => {
    expect.assertions(4);

    expect(toBinary(1)).toStrictEqual(1);
    expect(toBinary(2)).toStrictEqual(10);
    expect(toBinary(3)).toStrictEqual(11);
    expect(toBinary(5)).toStrictEqual(101);
  });
});
