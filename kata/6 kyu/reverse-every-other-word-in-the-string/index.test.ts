import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import reverse from './index.ts';

describe('reverse', () => {
  it('should reverse every other word in the string', () => {
    assert.strictEqual(reverse('Reverse this string, please!'), 'Reverse siht string, !esaelp');
    assert.strictEqual(
      reverse("I really don't like reversing strings!"),
      "I yllaer don't ekil reversing !sgnirts",
    );
  });
});
