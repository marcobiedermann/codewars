import generateShape from '.';

describe('generateShape', () => {
  it('should generate a square that is as long and wide as the integer', () => {
    expect(generateShape(8)).toBe(
      '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++',
    );
  });
});
