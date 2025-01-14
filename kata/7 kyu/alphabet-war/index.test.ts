import { describe, expect, it } from 'vitest';
import alphabetWar from './index.ts';

describe('alphabetWar', () => {
  it('should return which side wins the war', () => {
    expect.assertions(4);

    expect(alphabetWar('z')).toBe('Right side wins!');
    expect(alphabetWar('zdqmwpbs')).toBe("Let's fight again!");
    expect(alphabetWar('zzzzs')).toBe('Right side wins!');
    expect(alphabetWar('wwwwww')).toBe('Left side wins!');
  });
});
