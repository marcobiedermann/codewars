import Dinglemouse from '.';

describe('dinglemouse', () => {
  it('should get the full name', () => {
    expect.assertions(1);

    expect(new Dinglemouse('Clint', 'Eastwood').getFullName()).toBe('Clint Eastwood');
  });
});
