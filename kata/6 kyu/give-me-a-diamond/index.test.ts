import diamond from '.';

describe('diamond', () => {
  it('should print diamond', () => {
    expect(diamond(1)).toBe('*\n');
    expect(diamond(3)).toBe(' *\n***\n *\n');
    expect(diamond(5)).toBe('  *\n ***\n*****\n ***\n  *\n');
    expect(diamond(2)).toBeNull();
    expect(diamond(-3)).toBeNull();
    expect(diamond(0)).toBeNull();
  });
});
