/* eslint-disable no-console */

import assert from 'node:assert/strict';
import { describe, it, mock } from 'node:test';
import helloWorld from './index.ts';

const logSpy = mock.method(console, 'log');

describe('helloWorld', () => {
  it('should define function `helloWorld`', () => {
    helloWorld();

    assert.notStrictEqual(helloWorld, undefined);
    assert.strictEqual(logSpy.mock.calls[0].arguments[0], 'Hello World!');
  });
});
