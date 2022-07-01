import { decrypt, encrypt } from '.';

describe('encrypt/decrypt', () => {
  it('should encrypt text', () => {
    expect(encrypt('This is a test!', 0)).toBe('This is a test!');
    expect(encrypt('This is a test!', 1)).toBe('hsi  etTi sats!');
    expect(encrypt('This is a test!', 2)).toBe('s eT ashi tist!');
    expect(encrypt('This is a test!', 3)).toBe(' Tah itse sits!');
    expect(encrypt('This is a test!', 4)).toBe('This is a test!');
    expect(encrypt('This is a test!', -1)).toBe('This is a test!');
    expect(encrypt('This kata is very interesting!', 1)).toBe('hskt svr neetn!Ti aai eyitrsig');
  });

  it('should decrypt text', () => {
    expect(decrypt('This is a test!', 0)).toBe('This is a test!');
    expect(decrypt('hsi  etTi sats!', 1)).toBe('This is a test!');
    expect(decrypt('s eT ashi tist!', 2)).toBe('This is a test!');
    expect(decrypt(' Tah itse sits!', 3)).toBe('This is a test!');
    expect(decrypt('This is a test!', 4)).toBe('This is a test!');
    expect(decrypt('This is a test!', -1)).toBe('This is a test!');
    expect(decrypt('hskt svr neetn!Ti aai eyitrsig', 1)).toBe('This kata is very interesting!');
  });

  it('should test for `null` or Empty', () => {
    expect(encrypt('', 0)).toBe('');
    expect(decrypt('', 0)).toBe('');
    expect(encrypt(null as unknown as string, 0)).toBeNull();
    expect(decrypt(null as unknown as string, 0)).toBeNull();
  });
});
