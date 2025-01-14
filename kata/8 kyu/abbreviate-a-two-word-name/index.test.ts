import { describe, expect, it } from 'vitest';
import abbrevName from './index.ts';

describe('abbrevName', () => {
  it('should return two capital letters with a dot separating them', () => {
    expect.assertions(5);

    expect(abbrevName('Sam Harris')).toBe('S.H');
    expect(abbrevName('Patrick Feenan')).toBe('P.F');
    expect(abbrevName('Evan Cole')).toBe('E.C');
    expect(abbrevName('P Favuzzi')).toBe('P.F');
    expect(abbrevName('David Mendieta')).toBe('D.M');
  });
});
