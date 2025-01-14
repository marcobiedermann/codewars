import { describe, expect, it } from 'vitest';
import getDrinkByProfession from './index.ts';

describe('getDrinkByProfession', () => {
  it('should return profession by drink', () => {
    expect.assertions(8);

    expect(getDrinkByProfession('jabrOni')).toBe('Patron Tequila');
    expect(getDrinkByProfession('scHOOl counselor')).toBe('Anything with Alcohol');
    expect(getDrinkByProfession('prOgramMer')).toBe('Hipster Craft Beer');
    expect(getDrinkByProfession('bike ganG member')).toBe('Moonshine');
    expect(getDrinkByProfession('poLiTiCian')).toBe('Your tax dollars');
    expect(getDrinkByProfession('rapper')).toBe('Cristal');
    expect(getDrinkByProfession('pundit')).toBe('Beer');
    expect(getDrinkByProfession('Pug')).toBe('Beer');
  });
});
