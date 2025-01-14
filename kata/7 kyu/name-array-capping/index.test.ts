import { describe, expect, it } from 'vitest';
import capMe from './index.ts';

describe('capMe', () => {
  it('should capitalize each name in the array', () => {
    expect.assertions(2);

    expect(capMe(['jo', 'nelson', 'jurie'])).toStrictEqual(['Jo', 'Nelson', 'Jurie']);
    expect(capMe(['KARLY', 'DANIEL', 'KELSEY'])).toStrictEqual(['Karly', 'Daniel', 'Kelsey']);
  });
});
