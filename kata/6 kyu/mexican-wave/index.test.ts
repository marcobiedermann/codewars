import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import wave from './index.ts';

describe('wave', () => {
  it('should turn string into Mexican Wave', () => {
    assert.deepEqual(wave('hello'), ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']);
    assert.deepEqual(wave('codewars'), [
      'Codewars',
      'cOdewars',
      'coDewars',
      'codEwars',
      'codeWars',
      'codewArs',
      'codewaRs',
      'codewarS',
    ]);
    assert.deepEqual(wave(''), []);
    assert.deepEqual(wave('two words'), [
      'Two words',
      'tWo words',
      'twO words',
      'two Words',
      'two wOrds',
      'two woRds',
      'two worDs',
      'two wordS',
    ]);
    assert.deepEqual(wave(' gap '), [' Gap ', ' gAp ', ' gaP ']);
  });
});
