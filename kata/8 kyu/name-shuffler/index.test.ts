import { expect } from 'vitest';
import nameShuffler from '.';

describe('nameShuffler', () => {
  it('should', () => {
    expect(nameShuffler('john McClane')).toBe('McClane john');
  });
});
