import { describe, expect, it } from 'vitest';
import createSecretHolder from '.';

describe('createSecretHolder', () => {
  it('should store the secret as a private property', () => {
    expect.assertions(2);

    const secretHolder = createSecretHolder(5);

    expect(secretHolder.getSecret()).toBe(5);

    secretHolder.setSecret(2);

    expect(secretHolder.getSecret()).toBe(2);
  });
});
