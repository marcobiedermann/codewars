import parse from '.';

describe('parse', () => {
  it('should parse and run Deadfish', () => {
    expect(parse('iiisdoso')).toStrictEqual([8, 64]);
    expect(parse('iiisxxxdoso')).toStrictEqual([8, 64]);
  });
});
