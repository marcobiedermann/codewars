import { expect } from 'vitest';
import wave from '.';

describe('wave', () => {
  it('should turn string into Mexican Wave', () => {
    expect(wave('hello')).toStrictEqual(['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']);
    expect(wave('codewars')).toStrictEqual([
      'Codewars',
      'cOdewars',
      'coDewars',
      'codEwars',
      'codeWars',
      'codewArs',
      'codewaRs',
      'codewarS',
    ]);
    expect(wave('')).toStrictEqual([]);
    expect(wave('two words')).toStrictEqual([
      'Two words',
      'tWo words',
      'twO words',
      'two Words',
      'two wOrds',
      'two woRds',
      'two worDs',
      'two wordS',
    ]);
    expect(wave(' gap ')).toStrictEqual([' Gap ', ' gAp ', ' gaP ']);
  });
});
