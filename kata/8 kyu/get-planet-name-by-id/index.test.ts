import { describe, expect, it } from 'vitest';
import getPlanetName from './index.ts';

describe('getPlanetName', () => {
  it('should return planet name by ID', () => {
    expect.assertions(9);

    expect(getPlanetName(0)).toBe('ID does not match');
    expect(getPlanetName(1)).toBe('Mercury');
    expect(getPlanetName(2)).toBe('Venus');
    expect(getPlanetName(3)).toBe('Earth');
    expect(getPlanetName(4)).toBe('Mars');
    expect(getPlanetName(5)).toBe('Jupiter');
    expect(getPlanetName(6)).toBe('Saturn');
    expect(getPlanetName(7)).toBe('Uranus');
    expect(getPlanetName(8)).toBe('Neptune');
  });
});
