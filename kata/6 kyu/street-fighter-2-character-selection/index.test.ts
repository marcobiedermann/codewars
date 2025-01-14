import { describe, expect, it } from 'vitest';
import streetFighterSelection, { Move } from './index.ts';

describe('streetFighterSelection', () => {
  const fighters = [
    ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
    ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
  ];

  it('should work with few moves', () => {
    expect.assertions(1);

    const moves: Move[] = ['up', 'left', 'right', 'left', 'left'];

    expect(streetFighterSelection(fighters, [0, 0], moves)).toStrictEqual([
      'Ryu',
      'Vega',
      'Ryu',
      'Vega',
      'Balrog',
    ]);
  });

  it('should work with no selection cursor moves', () => {
    expect.assertions(1);

    const moves: Move[] = [];

    expect(streetFighterSelection(fighters, [0, 0], moves)).toStrictEqual([]);
  });

  it('should work when always moving left', () => {
    expect.assertions(1);

    const moves: Move[] = ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'];

    expect(streetFighterSelection(fighters, [0, 0], moves)).toStrictEqual([
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
    expect.assertions(1);

    const moves: Move[] = ['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right'];

    expect(streetFighterSelection(fighters, [0, 0], moves)).toStrictEqual([
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
    expect.assertions(1);

    const moves: Move[] = ['up', 'left', 'down', 'right', 'up', 'left', 'down', 'right'];

    expect(streetFighterSelection(fighters, [0, 0], moves)).toStrictEqual([
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
    expect.assertions(1);

    const moves: Move[] = ['down', 'down', 'down', 'down'];

    expect(streetFighterSelection(fighters, [0, 0], moves)).toStrictEqual([
      'Ken',
      'Ken',
      'Ken',
      'Ken',
    ]);
  });

  it('should work when always moving up', () => {
    expect.assertions(1);

    const moves: Move[] = ['up', 'up', 'up', 'up'];

    expect(streetFighterSelection(fighters, [0, 0], moves)).toStrictEqual([
      'Ryu',
      'Ryu',
      'Ryu',
      'Ryu',
    ]);
  });
});
