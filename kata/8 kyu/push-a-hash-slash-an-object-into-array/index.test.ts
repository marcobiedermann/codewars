import items from '.';

describe('items', () => {
  it('should push an object into an array', () => {
    expect.assertions(3);

    expect(items).not.toStrictEqual([]);
    expect(items).toHaveLength(1);
    expect(items).toStrictEqual([{ a: 'b', c: 'd' }]);
  });
});
