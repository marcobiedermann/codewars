import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import getGrade from './index.ts';

describe('getGrade', () => {
  it('should return an A', () => {
    assert.strictEqual(getGrade(95, 90, 93), 'A');
    assert.strictEqual(getGrade(100, 85, 96), 'A');
    assert.strictEqual(getGrade(92, 93, 94), 'A');
  });

  it('should return a B', () => {
    assert.strictEqual(getGrade(70, 70, 100), 'B');
    assert.strictEqual(getGrade(82, 85, 87), 'B');
    assert.strictEqual(getGrade(84, 79, 85), 'B');
    assert.strictEqual(getGrade(89, 89, 90), 'B');
  });

  it('should return a C', () => {
    assert.strictEqual(getGrade(70, 70, 70), 'C');
    assert.strictEqual(getGrade(75, 70, 79), 'C');
    assert.strictEqual(getGrade(60, 82, 76), 'C');
  });

  it('should return a D', () => {
    assert.strictEqual(getGrade(65, 70, 59), 'D');
    assert.strictEqual(getGrade(66, 62, 68), 'D');
    assert.strictEqual(getGrade(58, 62, 70), 'D');
  });

  it('should return an F', () => {
    assert.strictEqual(getGrade(44, 55, 52), 'F');
    assert.strictEqual(getGrade(48, 55, 52), 'F');
    assert.strictEqual(getGrade(58, 59, 60), 'F');
  });
});
