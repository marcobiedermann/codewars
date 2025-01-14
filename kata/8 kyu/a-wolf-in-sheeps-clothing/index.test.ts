import { describe, expect, it } from 'vitest';
import warnTheSheep from './index.ts';

describe('warnTheSheep', () => {
  it('should warn sheep in front of wolf', () => {
    expect.assertions(5);

    expect(
      warnTheSheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']),
    ).toBe('Oi! Sheep number 2! You are about to be eaten by a wolf!');
    expect(warnTheSheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep'])).toBe(
      'Oi! Sheep number 5! You are about to be eaten by a wolf!',
    );
    expect(warnTheSheep(['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep'])).toBe(
      'Oi! Sheep number 6! You are about to be eaten by a wolf!',
    );
    expect(warnTheSheep(['sheep', 'wolf', 'sheep'])).toBe(
      'Oi! Sheep number 1! You are about to be eaten by a wolf!',
    );
    expect(warnTheSheep(['sheep', 'sheep', 'wolf'])).toBe('Pls go away and stop eating my sheep');
  });
});
