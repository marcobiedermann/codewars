import { describe, expect, it } from 'vitest';
import correct from './index.ts';

describe('correct', () => {
  it('should correct errors in text', () => {
    expect.assertions(5);

    expect(correct('L0ND0N')).toBe('LONDON');
    expect(correct('DUBL1N')).toBe('DUBLIN');
    expect(correct('51NGAP0RE')).toBe('SINGAPORE');
    expect(correct('BUDAPE5T')).toBe('BUDAPEST');
    expect(correct('PAR15')).toBe('PARIS');
  });
});
