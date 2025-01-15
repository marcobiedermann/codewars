import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getDrinkByProfession from './index.ts';

describe('getDrinkByProfession', () => {
  it('should return profession by drink', () => {
    assert.strictEqual(getDrinkByProfession('jabrOni'), 'Patron Tequila');
    assert.strictEqual(getDrinkByProfession('scHOOl counselor'), 'Anything with Alcohol');
    assert.strictEqual(getDrinkByProfession('prOgramMer'), 'Hipster Craft Beer');
    assert.strictEqual(getDrinkByProfession('bike ganG member'), 'Moonshine');
    assert.strictEqual(getDrinkByProfession('poLiTiCian'), 'Your tax dollars');
    assert.strictEqual(getDrinkByProfession('rapper'), 'Cristal');
    assert.strictEqual(getDrinkByProfession('pundit'), 'Beer');
    assert.strictEqual(getDrinkByProfession('Pug'), 'Beer');
  });
});
