import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import generateHashtag from './index.ts';

describe('generateHashtag', () => {
  it('should generate a hashtag', () => {
    assert.strictEqual(generateHashtag(''), false);
    assert.strictEqual(generateHashtag(' '.repeat(200)), false);
    assert.strictEqual(generateHashtag('Do We have A Hashtag'), '#DoWeHaveAHashtag');
    assert.strictEqual(generateHashtag('Codewars'), '#Codewars');
    assert.strictEqual(generateHashtag('Codewars Is Nice'), '#CodewarsIsNice');
    assert.strictEqual(generateHashtag('Codewars is nice'), '#CodewarsIsNice');
    assert.strictEqual(generateHashtag(`code${' '.repeat(140)}wars`), '#CodeWars');
    assert.strictEqual(
      generateHashtag(
        'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat',
      ),
      false,
    );
    assert.strictEqual(generateHashtag('a'.repeat(139)), `#A${'a'.repeat(138)}`);
    assert.strictEqual(generateHashtag('a'.repeat(140)), false);
  });
});
