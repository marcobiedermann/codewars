import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import FileNameExtractor from './index.ts';

describe('fileNameExtractor', () => {
  it('should extract the file name', () => {
    assert.strictEqual(
      FileNameExtractor.extractFileName('1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34'),
      'FILE_NAME.EXTENSION',
    );
    assert.strictEqual(
      FileNameExtractor.extractFileName('1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION'),
      'FILE_NAME.EXTENSION',
    );
  });
});
