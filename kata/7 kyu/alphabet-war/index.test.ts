import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import alphabetWar from './index.ts';

describe('alphabetWar', () => {
  it('should return which side wins the war', () => {
    assert.strictEqual(alphabetWar('z'), 'Right side wins!');
    assert.strictEqual(alphabetWar('zdqmwpbs'), "Let's fight again!");
    assert.strictEqual(alphabetWar('zzzzs'), 'Right side wins!');
    assert.strictEqual(alphabetWar('wwwwww'), 'Left side wins!');
  });
});
