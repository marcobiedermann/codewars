import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import disemvowel from './index.ts';

describe('disemvowel', () => {
  it('should remove all vowels', () => {
    assert.strictEqual(disemvowel('This website is for losers LOL!'), 'Ths wbst s fr lsrs LL!');
    assert.strictEqual(
      disemvowel("No offense but,\nYour writing is among the worst I've ever read"),
      "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd",
    );
    assert.strictEqual(disemvowel('What are you, a communist?'), 'Wht r y,  cmmnst?');
  });
});
