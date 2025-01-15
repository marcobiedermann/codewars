import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import toLeetSpeak from './index.ts';

describe('toLeetSpeak', () => {
  it('should convert to Leetspeak', () => {
    assert.strictEqual(toLeetSpeak('LEET'), '1337');
    assert.strictEqual(toLeetSpeak('CODEWARS'), '(0D3W@R$');
    assert.strictEqual(toLeetSpeak('HELLO WORLD'), '#3110 W0R1D');
    assert.strictEqual(toLeetSpeak('LOREM IPSUM DOLOR SIT AMET'), '10R3M !P$UM D010R $!7 @M37');
    assert.strictEqual(
      toLeetSpeak('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'),
      '7#3 QU!(K 8R0WN F0X JUMP$ 0V3R 7#3 1@2Y D06',
    );
  });
});
