import { describe, expect, it } from 'vitest';
import bump from '.';

describe('bump', () => {
  it('should check if your can make it home safely', () => {
    expect.assertions(3);

    expect(bump('n')).toBe('Woohoo!');
    expect(bump('_nnnnnnn_n__n______nn__nn_nnn')).toBe('Car Dead');
    expect(bump('______n___n_')).toBe('Woohoo!');
  });
});
