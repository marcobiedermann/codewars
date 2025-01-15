import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import bmi from './index.ts';

describe('bmi', () => {
  it('should calculate BMI', () => {
    assert.strictEqual(bmi(50, 1.8), 'Underweight');
    assert.strictEqual(bmi(80, 1.8), 'Normal');
    assert.strictEqual(bmi(90, 1.8), 'Overweight');
    assert.strictEqual(bmi(100, 1.8), 'Obese');
  });
});
