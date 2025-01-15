/* eslint-disable no-console */

import assert from 'node:assert/strict';
import { describe, it, mock } from 'node:test';
import _if from './index.ts';

const logSpy = mock.method(console, 'log');

describe('_if', () => {
  it('should call `func1` when `bool` is truthy, otherwise `func2`', () => {
    _if(
      true,
      () => {
        console.log('True');
      },
      () => {
        console.log('false');
      },
    );
    assert.notStrictEqual(_if, undefined);
    assert.strictEqual(logSpy.mock.calls[0].arguments[0], 'True');
  });
});
