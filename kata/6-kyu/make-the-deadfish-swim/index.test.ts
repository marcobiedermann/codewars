import parse from '.';

describe('parse', () => {
  it('should parse and run Deadfish', () => {
    expect(parse('iiisdoso')).toEqual([8, 64]);
    expect(parse('iiisxxxdoso')).toEqual([8, 64]);
  });
});
