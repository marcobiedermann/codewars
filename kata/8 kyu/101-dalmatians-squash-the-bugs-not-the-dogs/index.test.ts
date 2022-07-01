import { expect } from 'vitest';
import howManyDalmatians from '.';

describe('howManyDalmatians', () => {
  it('should return amount of dogs', () => {
    expect(howManyDalmatians(26)).toBe('More than a handful!');
    expect(howManyDalmatians(8)).toBe('Hardly any');
    expect(howManyDalmatians(14)).toBe('More than a handful!');
    expect(howManyDalmatians(80)).toBe("Woah that's a lot of dogs!");
    expect(howManyDalmatians(100)).toBe("Woah that's a lot of dogs!");
    expect(howManyDalmatians(101)).toBe('101 DALMATIANS!!!');
  });
});
