import { describe, expect, it } from 'vitest';
import oddOrEven from '.';

describe('oddOrEven', () => {
  it('edge tests', () => {
    expect.assertions(3);

    expect(oddOrEven([0])).toBe('even');
    expect(oddOrEven([1])).toBe('odd');
    expect(oddOrEven([])).toBe('even');
  });

  it('even tests', () => {
    expect.assertions(3);

    expect(oddOrEven([0, 1, 5])).toBe('even');
    expect(oddOrEven([0, 1, 3])).toBe('even');
    expect(oddOrEven([1023, 1, 2])).toBe('even');
  });

  it('negative Even tests', () => {
    expect.assertions(3);

    expect(oddOrEven([0, -1, -5])).toBe('even');
    expect(oddOrEven([0, -1, -3])).toBe('even');
    expect(oddOrEven([-1023, 1, -2])).toBe('even');
  });

  it('odd tests', () => {
    expect.assertions(3);

    expect(oddOrEven([0, 1, 2])).toBe('odd');
    expect(oddOrEven([0, 1, 4])).toBe('odd');
    expect(oddOrEven([1023, 1, 3])).toBe('odd');
  });

  it('negative Odd tests', () => {
    expect.assertions(3);

    expect(oddOrEven([0, -1, 2])).toBe('odd');
    expect(oddOrEven([0, 1, -4])).toBe('odd');
    expect(oddOrEven([-1023, -1, 3])).toBe('odd');
  });
});
