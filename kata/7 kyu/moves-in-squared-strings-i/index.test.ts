import oper, { horMirror, vertMirror } from '.';

describe('opstrings', () => {
  it('basic tests vertMirror', () => {
    expect.assertions(2);

    expect(oper(vertMirror, 'hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu')).toBe(
      'QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw',
    );
    expect(oper(vertMirror, 'IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx')).toBe(
      'EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP',
    );
  });

  it('basic tests horMirror', () => {
    expect.assertions(2);

    expect(oper(horMirror, 'lVHt\nJVhv\nCSbg\nyeCt')).toBe('yeCt\nCSbg\nJVhv\nlVHt');
    expect(oper(horMirror, 'njMK\ndbrZ\nLPKo\ncEYz')).toBe('cEYz\nLPKo\ndbrZ\nnjMK');
  });
});
