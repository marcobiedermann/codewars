import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { decrypt, encrypt } from './index.ts';

describe('encrypt/decrypt', () => {
  it('should encrypt text', () => {
    assert.strictEqual(encrypt('This is a test!', 0), 'This is a test!');
    assert.strictEqual(encrypt('This is a test!', 1), 'hsi  etTi sats!');
    assert.strictEqual(encrypt('This is a test!', 2), 's eT ashi tist!');
    assert.strictEqual(encrypt('This is a test!', 3), ' Tah itse sits!');
    assert.strictEqual(encrypt('This is a test!', 4), 'This is a test!');
    assert.strictEqual(encrypt('This is a test!', -1), 'This is a test!');
    assert.strictEqual(
      encrypt('This kata is very interesting!', 1),
      'hskt svr neetn!Ti aai eyitrsig',
    );
  });

  it('should decrypt text', () => {
    assert.strictEqual(decrypt('This is a test!', 0), 'This is a test!');
    assert.strictEqual(decrypt('hsi  etTi sats!', 1), 'This is a test!');
    assert.strictEqual(decrypt('s eT ashi tist!', 2), 'This is a test!');
    assert.strictEqual(decrypt(' Tah itse sits!', 3), 'This is a test!');
    assert.strictEqual(decrypt('This is a test!', 4), 'This is a test!');
    assert.strictEqual(decrypt('This is a test!', -1), 'This is a test!');
    assert.strictEqual(
      decrypt('hskt svr neetn!Ti aai eyitrsig', 1),
      'This kata is very interesting!',
    );
  });

  it('should test for `null` or Empty', () => {
    assert.strictEqual(encrypt('', 0), '');
    assert.strictEqual(decrypt('', 0), '');
    assert.strictEqual(encrypt(null as unknown as string, 0), null);
    assert.strictEqual(decrypt(null as unknown as string, 0), null);
  });
});
