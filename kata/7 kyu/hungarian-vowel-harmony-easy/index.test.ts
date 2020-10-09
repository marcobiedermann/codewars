import dative from '.';

describe('dative', () => {
  it('should return the valid form of a valid Hungarian word', () => {
    expect.assertions(9);

    expect(dative('ablak')).toStrictEqual('ablaknak');
    expect(dative('tükör')).toStrictEqual('tükörnek');
    expect(dative('keret')).toStrictEqual('keretnek');
    expect(dative('otthon')).toStrictEqual('otthonnak');
    expect(dative('virág')).toStrictEqual('virágnak');
    expect(dative('tett')).toStrictEqual('tettnek');
    expect(dative('rokkant')).toStrictEqual('rokkantnak');
    expect(dative('rossz')).toStrictEqual('rossznak');
    expect(dative('gonosz')).toStrictEqual('gonosznak');
  });
});
