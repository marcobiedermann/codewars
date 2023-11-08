import { describe, expect, it } from 'vitest';
import billboard from '.';

describe('billboard', () => {
  it('should calculate the billboard ad cost', () => {
    expect.assertions(11);

    expect(billboard('Jeong-Ho Aristotelis')).toBe(600);
    expect(billboard('Abishai Charalampos')).toBe(570);
    expect(billboard('Idwal Augustin')).toBe(420);
    expect(billboard('Hadufuns John', 20)).toBe(260);
    expect(billboard('Zoroaster Donnchadh')).toBe(570);
    expect(billboard('Claude Miljenko')).toBe(450);
    expect(billboard('Werner Vígi', 15)).toBe(165);
    expect(billboard('Anani Fridumar')).toBe(420);
    expect(billboard('Paolo Oli')).toBe(270);
    expect(billboard('Hjalmar Liupold', 40)).toBe(600);
    expect(billboard('Simon Eadwulf')).toBe(390);
  });
});
