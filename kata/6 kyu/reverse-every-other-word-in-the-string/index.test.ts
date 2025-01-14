import { describe, expect, it } from 'vitest';
import reverse from './index.ts';

describe('reverse', () => {
  it('should reverse every other word in the string', () => {
    expect.assertions(2);

    expect(reverse('Reverse this string, please!')).toBe('Reverse siht string, !esaelp');
    expect(reverse("I really don't like reversing strings!")).toBe(
      "I yllaer don't ekil reversing !sgnirts",
    );
  });
});
