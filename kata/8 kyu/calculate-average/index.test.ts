/* eslint-disable camelcase */

import find_average from '.';

describe('find_average', () => {
  it('should calculate average of numbers', () => {
    expect.assertions(2);

    expect(find_average([1, 1, 1])).toStrictEqual(1);
    expect(find_average([1, 2, 3])).toStrictEqual(2);
  });
});
