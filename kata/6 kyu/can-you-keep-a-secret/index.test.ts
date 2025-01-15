import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import createSecretHolder from './index.ts';

describe('createSecretHolder', () => {
  it('should store the secret as a private property', () => {
    const secretHolder = createSecretHolder(5);

    assert.strictEqual(secretHolder.getSecret(), 5);

    secretHolder.setSecret(2);

    assert.strictEqual(secretHolder.getSecret(), 2);
  });
});
