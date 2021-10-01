import evaporator from '.';

describe('evaporator', () => {
  it('should calculate day on which the vaporator will be out of use', () => {
    expect.assertions(1);

    expect(evaporator(10, 10, 10)).toBe(22);
  });
});
