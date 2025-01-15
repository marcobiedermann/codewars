import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import well from './index.ts';

describe('well', () => {
  it('should should check good ideas', () => {
    assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
    assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
    assert.strictEqual(
      well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']),
      'I smell a series!',
    );
  });
});
