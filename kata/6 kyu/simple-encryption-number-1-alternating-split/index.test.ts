import { decrypt, encrypt } from '.';

describe('encrypt/decrypt', () => {
  it('should encrypt text', () => {
    expect.assertions(7);

    expect(encrypt('This is a test!', 0)).toStrictEqual('This is a test!');
    expect(encrypt('This is a test!', 1)).toStrictEqual('hsi  etTi sats!');
    expect(encrypt('This is a test!', 2)).toStrictEqual('s eT ashi tist!');
    expect(encrypt('This is a test!', 3)).toStrictEqual(' Tah itse sits!');
    expect(encrypt('This is a test!', 4)).toStrictEqual('This is a test!');
    expect(encrypt('This is a test!', -1)).toStrictEqual('This is a test!');
    expect(encrypt('This kata is very interesting!', 1)).toStrictEqual(
      'hskt svr neetn!Ti aai eyitrsig',
    );
  });

  it('should decrypt text', () => {
    expect.assertions(7);

    expect(decrypt('This is a test!', 0)).toStrictEqual('This is a test!');
    expect(decrypt('hsi  etTi sats!', 1)).toStrictEqual('This is a test!');
    expect(decrypt('s eT ashi tist!', 2)).toStrictEqual('This is a test!');
    expect(decrypt(' Tah itse sits!', 3)).toStrictEqual('This is a test!');
    expect(decrypt('This is a test!', 4)).toStrictEqual('This is a test!');
    expect(decrypt('This is a test!', -1)).toStrictEqual('This is a test!');
    expect(decrypt('hskt svr neetn!Ti aai eyitrsig', 1)).toStrictEqual(
      'This kata is very interesting!',
    );
  });

  it('should test for `null` or Empty', () => {
    expect.assertions(4);

    expect(encrypt('', 0)).toStrictEqual('');
    expect(decrypt('', 0)).toStrictEqual('');
    expect(encrypt(null as unknown as string, 0)).toBeNull();
    expect(decrypt(null as unknown as string, 0)).toBeNull();
  });
});
