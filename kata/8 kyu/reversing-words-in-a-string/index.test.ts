import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import reverse from './index.ts';

describe('reverse', () => {
  it('should reverse words in string', () => {
    assert.strictEqual(reverse('I am an expert at this'), 'this at expert an am I');
    assert.strictEqual(reverse('This is so easy'), 'easy so is This');
    assert.strictEqual(reverse('no one cares'), 'cares one no');
    assert.strictEqual(reverse(''), '');
    assert.strictEqual(reverse('CodeWars'), 'CodeWars');
  });
});
