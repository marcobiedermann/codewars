import FileNameExtractor from '.';

describe('fileNameExtractor', () => {
  it('should extract the file name', () => {
    expect.assertions(2);

    expect(
      FileNameExtractor.extractFileName('1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34'),
    ).toBe('FILE_NAME.EXTENSION');
    expect(
      FileNameExtractor.extractFileName('1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION'),
    ).toBe('FILE_NAME.EXTENSION');
  });
});
