import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import remove from './index.ts';

describe('remove', () => {
  it('should remove n amount of exclamatin marks', () => {
    assert.strictEqual(remove('Hi!', 1), 'Hi');
    assert.strictEqual(remove('Hi!', 100), 'Hi');
    assert.strictEqual(remove('Hi!!!', 1), 'Hi!!');
    assert.strictEqual(remove('Hi!!!', 100), 'Hi');
    assert.strictEqual(remove('!Hi', 1), 'Hi');
    assert.strictEqual(remove('!Hi!', 1), 'Hi!');
    assert.strictEqual(remove('!Hi!', 100), 'Hi');
    assert.strictEqual(remove('!!!Hi !!hi!!! !hi', 1), '!!Hi !!hi!!! !hi');
    assert.strictEqual(remove('!!!Hi !!hi!!! !hi', 3), 'Hi !!hi!!! !hi');
    assert.strictEqual(remove('!!!Hi !!hi!!! !hi', 5), 'Hi hi!!! !hi');
    assert.strictEqual(remove('!!!Hi !!hi!!! !hi', 100), 'Hi hi hi');
  });
});
