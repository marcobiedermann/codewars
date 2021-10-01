/* eslint-disable camelcase */

import digital_root from '.';

describe('foo', () => {
  it('should sum digits until a single-digit number is produced', () => {
    expect.assertions(2);

    expect(digital_root(16)).toBe(7);
    expect(digital_root(456)).toBe(6);
  });
});
