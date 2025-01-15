import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import isUpperCase from './index.ts';

describe('isUpperCase', () => {
  it('should work for the examples provided in the description', () => {
    assert.notStrictEqual(isUpperCase(''), undefined);
    assert.strictEqual(isUpperCase('c'), false);
    assert.strictEqual(isUpperCase('C'), true);
    assert.strictEqual(isUpperCase('hello I AM DONALD'), false);
    assert.strictEqual(isUpperCase('HELLO I AM DONALD'), true);
    assert.strictEqual(isUpperCase('ACSKLDFJSgSKLDFJSKLDFJ'), false);
    assert.strictEqual(isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ'), true);
  });

  it('should also work for a few other basic tests', () => {
    assert.strictEqual(isUpperCase('Hello World'), false);
    assert.strictEqual(isUpperCase('hello world'), false);
    assert.strictEqual(isUpperCase('Hello world'), false);
    assert.strictEqual(isUpperCase('hello World'), false);
    assert.strictEqual(isUpperCase('HELLO WORLD'), true);
    assert.strictEqual(isUpperCase('Bob walks his dog every day.'), false);
    assert.strictEqual(isUpperCase('BOB walks his dog every day.'), false);
    assert.strictEqual(isUpperCase('BOB WALKS HIS DOG EVERY DAY.'), true);
    assert.strictEqual(isUpperCase('BOB WALKs HIS DOG EVERY DAY.'), false);
    assert.strictEqual(isUpperCase('#lovewins'), false);
    assert.strictEqual(isUpperCase('#Lovewins'), false);
    assert.strictEqual(isUpperCase('#loveWins'), false);
    assert.strictEqual(isUpperCase('#LoveWins'), false);
    assert.strictEqual(isUpperCase('#LOVEWins'), false);
    assert.strictEqual(isUpperCase('#LoveWINS'), false);
    assert.strictEqual(isUpperCase('#LOVEWINs'), false);
    assert.strictEqual(isUpperCase('#lOVEWINS'), false);
    assert.strictEqual(isUpperCase('#LOVEWINS'), true);
  });
});
