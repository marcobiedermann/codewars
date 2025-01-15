import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { Move } from './index.ts';
import streetFighterSelection from './index.ts';

describe('streetFighterSelection', () => {
  const fighters = [
    ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
    ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
  ];

  it('should work with few moves', () => {
    const moves: Move[] = ['up', 'left', 'right', 'left', 'left'];

    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      'Ryu',
      'Vega',
      'Ryu',
      'Vega',
      'Balrog',
    ]);
  });

  it('should work with no selection cursor moves', () => {
    const moves: Move[] = [];

    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), []);
  });

  it('should work when always moving left', () => {
    const moves: Move[] = ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'];

    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      'Vega',
      'Balrog',
      'Guile',
      'Blanka',
      'E.Honda',
      'Ryu',
      'Vega',
      'Balrog',
    ]);
  });

  it('should work when always moving right', () => {
    const moves: Move[] = ['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right'];

    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      'E.Honda',
      'Blanka',
      'Guile',
      'Balrog',
      'Vega',
      'Ryu',
      'E.Honda',
      'Blanka',
    ]);
  });

  it('should use all 4 directions clockwise twice', () => {
    const moves: Move[] = ['up', 'left', 'down', 'right', 'up', 'left', 'down', 'right'];

    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), [
      'Ryu',
      'Vega',
      'M.Bison',
      'Ken',
      'Ryu',
      'Vega',
      'M.Bison',
      'Ken',
    ]);
  });

  it('should work when always moving down', () => {
    const moves: Move[] = ['down', 'down', 'down', 'down'];

    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), ['Ken', 'Ken', 'Ken', 'Ken']);
  });

  it('should work when always moving up', () => {
    const moves: Move[] = ['up', 'up', 'up', 'up'];

    assert.deepEqual(streetFighterSelection(fighters, [0, 0], moves), ['Ryu', 'Ryu', 'Ryu', 'Ryu']);
  });
});
