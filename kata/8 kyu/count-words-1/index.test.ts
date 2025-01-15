import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import countWords from './index.ts';

describe('countWords', () => {
  it('should work in basic form of problem', () => {
    assert.strictEqual(countWords('Hello'), 1);
    assert.strictEqual(countWords('Hello, World!'), 2);
    assert.strictEqual(
      countWords(
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ),
      19,
    );
    assert.strictEqual(countWords(''), 0);
    assert.strictEqual(countWords('With! Symbol@ #Around! (Every) %Word$'), 5);
    assert.strictEqual(countWords('Dear   Victoria, I love  to press   space button.'), 8);
  });

  it('should work with spaces around string', () => {
    assert.strictEqual(countWords(' Arthur '), 1);
    assert.strictEqual(countWords(' David'), 1);
    assert.strictEqual(countWords('Nelson '), 1);
    assert.strictEqual(countWords('  Hello Gomer  '), 2);
    assert.strictEqual(countWords('  Hello     Bart  '), 2);
  });

  it('should work with non-whitespace (ex. breakspace) chars', () => {
    assert.strictEqual(countWords('﻿Hello﻿World '), 2);
    assert.strictEqual(countWords('Hello﻿World'), 2);
  });
});
