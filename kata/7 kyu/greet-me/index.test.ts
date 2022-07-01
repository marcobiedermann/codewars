import greet from '.';

describe('greet', () => {
  it('should greet and capitalize name', () => {
    expect(greet('riley')).toBe('Hello Riley!');
  });
});
