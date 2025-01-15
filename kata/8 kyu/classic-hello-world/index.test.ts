import assert from 'node:assert/strict';
import { describe, it, mock } from 'node:test';
import Solution from './index.ts';

const logSpy = mock.method(console, 'log');

describe('solution', () => {
  it('should log `Hello World!`', () => {
    Solution.main();

    assert.strictEqual(logSpy.mock.calls[0].arguments[0], 'Hello World!');
  });
});
