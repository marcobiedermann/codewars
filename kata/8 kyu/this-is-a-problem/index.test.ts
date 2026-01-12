import NameMe from '.';

describe('nameMe', () => {
  it('should return the full name', () => {
    expect.assertions(3);

    const n = new (NameMe as any)('John', 'Doe');

    expect(typeof n.firstName).toBeDefined();
    expect(n.firstName).toBe('John');

    expect(typeof n.lastName).toBeDefined();
    expect(n.lastName).toBe('Doe');

    expect(typeof n.name).toBeDefined();
    expect(n.name).toBe('John Doe');
  });
});
